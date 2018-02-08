import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeDataService } from '../services/code-data.service';
import { AuthService } from '../services/auth.service';
import { error } from 'selenium-webdriver';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Response } from '@angular/http/';
import { ScrollTopService } from '../services/scroll-to-top.service';

// import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'code-entry-form',
  templateUrl: './code-entry-form.component.html',
  styleUrls: ['./code-entry-form.component.css']
})
export class CodeEntryFormComponent implements OnInit {
  code: string = '';
  invalidCode = false;
  codeForm = new FormGroup({
    'code': new FormControl('', Validators.required)
  })


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private codeData: CodeDataService,
    private scrolltoTop: ScrollTopService
  ) {

  }


  ngOnInit() {
    this.scrolltoTop.setScrollTop();
    let code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      this.code = code;
      this.submit({ 'code': code });
    }
  }

  submit(codeValue) {
    this.auth.validateCode(codeValue).
      subscribe(
      result => {
        if (result) {
          let jwtHelper = new JwtHelper();
          let tokenData = jwtHelper.decodeToken(localStorage.getItem('token'));
          
          if (tokenData.data.galleryURL) {
            //redirect if code is for gallery
            localStorage.removeItem('token');
            window.location.href = "http://" + tokenData.data.galleryURL;
          }
          else {
            // get registration config data
            this.codeData.setCodeData(tokenData.data);
            console.log(tokenData);
            this.router.navigate(['contactentry']); //, { skipLocationChange: true });
          }
        }
        else {
          this.invalidCode = true;
        }
      },
      (error: Response) => {
        if (error.status!=500) {
          let errData = error.json();
          console.log(errData);
          if (errData && errData.error){
            (this.codeForm.get('code') as FormControl).setErrors({ 'invalidCode': { 'message': errData.error.message } });
            console.log(this.codeForm);
            return true;
          }
        }
        (this.codeForm.get('code') as FormControl).setErrors({ 'unknownError': { 'code': error.status } });
      }
    );
  }
}
