import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DaysValidator } from './days.validators';
import { CodeDataService } from '../services/code-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'child-entry-form',
  templateUrl: './child-entry-form.component.html',
  styleUrls: ['./child-entry-form.component.css']
})
export class ChildEntryFormComponent implements OnInit {
    childNum: number;
    siblings: boolean;
    friends: boolean;
    groups: object;
    headingText: string;

    constructor(
      private codeData: CodeDataService,
      private route: ActivatedRoute,
      private router: Router, 
    ) { 
   
    }

  childEntryForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'surname': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'group': new FormControl('', [Validators.required]),
    'days': new FormGroup({
      'mon': new FormControl('', ),
      'tue': new FormControl('', ),
      'wed': new FormControl('', ),
      'thu': new FormControl('', ),
      'fri': new FormControl('', )
    }, DaysValidator.dayMustBeSelected),
    'siblings': new FormControl('', ),
    'friends': new FormControl('', ),
    'info': new FormControl('', ),
  })



  submit(f) {
    this.codeData.children[this.codeData.childNav.current-1] = this.childEntryForm.value;
    console.log(this.codeData.children);
    if (this.codeData.childNav.next > 0) 
      this.router.navigate(['childentry',this.codeData.childNav.next]); //, { skipLocationChange: true });
    else {
      this.router.navigate(['confirmdetails']); //, { skipLocationChange: true });
    }
  }

  navBack(){
    this.codeData.children[this.codeData.childNav.current-1] = this.childEntryForm.value;
    if (this.codeData.childNav.previous == 0) 
      this.router.navigate(['contactentry']); //, { skipLocationChange: true });
    else {
      this.router.navigate(['childentry',this.codeData.childNav.previous]); //, { skipLocationChange: true });
    }
  }

  ngOnInit() {
    this.siblings = this.codeData.siblings;
    this.friends = this.codeData.friends;
    this.groups = this.codeData.groups;
    this.route.paramMap
      .subscribe(params => {
        this.childNum = +params.get('child');
        if (this.codeData.numberOfChildren==1)
          this.headingText = "Please enter your child's details";
        else
          this.headingText = "<div style='float: left'>Please enter the details of </div><div>child "+this.childNum+"</div>";
        this.codeData.updateChildNav(this.childNum);
        if (this.childNum > this.codeData.children.length)
          this.childEntryForm.reset();
        else
        this.childEntryForm.reset(this.codeData.children[this.childNum-1]);
      });
      

      
  }

}
