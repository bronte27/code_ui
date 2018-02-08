import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { Router } from '@angular/router';
import { CodeDataService } from '../services/code-data.service';
import { RegistrationService } from '../services/registration.service';
import { ThankYouResponse } from '../interfaces/code.interface';
import { ScrollTopService } from '../services/scroll-to-top.service';
// import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-thank-you-form',
  templateUrl: './thank-you-form.component.html',
  styleUrls: ['./thank-you-form.component.css']
})



export class ThankYouFormComponent implements OnInit {
  response: string  = '<p>Emailing your confirmation...</p>';

  constructor(
    //    private route: ActivatedRoute,
    //    private router: Router,
    private codeData: CodeDataService,
    private registration: RegistrationService,
    private scrolltoTop: ScrollTopService
  ) { }

  ngOnInit() {
    this.scrolltoTop.setScrollTop();
    let postData: any;
    postData = {
      'data': {
        'contact': this.codeData.contact,
        'children': this.codeData.children,
        'mailingList': this.codeData.mailingList
      }
    };



  this.registration.postRegistration(postData).
    subscribe(
      (result: ThankYouResponse) => {
        this.response = result.data.HTML;
        localStorage.removeItem('token');
      },
      (error: Response) => {
        let errData: any;
        if (error.status != 500) {
          errData = error;
          //console.log(errData);
          if (errData && errData.error) {
            this.response = errData.error.message;
            return true;
          }
        } else {
          this.response = 'An unknown error occured';
          console.log(errData.error.message);
        }
      }
    )
  }
}
