import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailsValidator } from './emails.validators';
import { Router } from '@angular/router';
import { CodeDataService } from '../services/code-data.service';
import { ScrollTopService } from '../services/scroll-to-top.service';


@Component({
  selector: 'contact-entry-form',
  templateUrl: './contact-entry-form.component.html',
  styleUrls: ['./contact-entry-form.component.css']
})
export class ContactEntryFormComponent implements OnInit {
  contactForm = new FormGroup({
    'contactName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'phoneNumber': new FormControl('', [Validators.required, Validators.pattern('^\\({0,1}((0|\\+61)(2|4|3|7|8)){0,1}\\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$')]),
    'emails': new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}[\\s]*$')]),
      'validateEmail': new FormControl('', [Validators.required]), //pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')])
    }, EmailsValidator.mismatchedEmails),
    'numChildren': new FormControl('1', [Validators.required])
  })
  
  constructor(
    private router: Router,
    public codeData: CodeDataService,
    private scrolltoTop: ScrollTopService
  ) { 
 
    
  }





  


  ngOnInit() {

    this.scrolltoTop.setScrollTop();
    if (typeof this.codeData.contact != 'undefined'){
      this.contactForm.setValue(this.codeData.contact);
    }
  }

  submit() {
    this.codeData.contact = this.contactForm.value;
    this.codeData.numberOfChildren = this.contactForm.get('numChildren').value;
    // cut list to number of children entered on form.
    this.codeData.children = this.codeData.children.slice(0,this.codeData.numberOfChildren);
    if (this.codeData.codeType == 'contact_reg')
      this.router.navigate(['confirmdetails']); //, { skipLocationChange: true });
    else {
      this.router.navigate(['childentry',1]); //, { skipLocationChange: true });
    }
  }

  back() {
    this.router.navigate(['codeentry']);
  }

}

