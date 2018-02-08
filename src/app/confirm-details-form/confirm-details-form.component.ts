import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ScrollTopService } from '../services/scroll-to-top.service';

@Component({
  selector: 'app-confirm-details-form',
  templateUrl: './confirm-details-form.component.html',
  styleUrls: ['./confirm-details-form.component.css']
})
export class ConfirmDetailsFormComponent implements OnInit {
  contact: any;
  children: any[];
  groups: any[];
  siblings: boolean;
  friends: boolean;
  moreThanOneChild: boolean;
  confirmForm = new FormGroup({
    'mailingList': new FormControl('',)
  })


  constructor(
    private codeData: CodeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private scrolltoTop: ScrollTopService
  ) { }

  ngOnInit() {
    this.scrolltoTop.setScrollTop();
    this.contact = this.codeData.contact;
    this.children = this.codeData.children;
    this.groups = this.codeData.groups;
    this.friends = this.codeData.friends;
    this.siblings = this.codeData.siblings;
    this.moreThanOneChild = ((this.codeData.numberOfChildren > 1) ? true : false);
  }

  navBack() {
    if (this.codeData.codeType == 'contact_reg') {
      this.router.navigate(['contactentry']);
    } else {
      this.router.navigate(['childentry', this.codeData.numberOfChildren]); //, { skipLocationChange: true });
    }
  }

  submit(){
    this.codeData.mailingList = this.confirmForm.get('mailingList').value;
    this.router.navigate(['thankyou']);
  }

}
