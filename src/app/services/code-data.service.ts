interface ChildNav {
    current: number; 
    previous: number; 
    next: number
};

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CodeDataService {
    code: string;
    codeType: string; // child_reg, contact_reg
    groups: object[];
    siblings: boolean;
    friends: boolean;
    numberOfChildren = 0;
    contact: any;
    children: any [];
    childNav: ChildNav;
    mailingList: boolean;

    constructor(private http: Http){
        this.children = new Array();
        this.childNav = {current:0, previous: 0, next: 0};
        // this.contact = new Object();
    }

    public clearCodeData() {
        this.children = new Array();
        this.contact = undefined;
    }

    setCodeData(data) {
        this.code = data.code;
        this.codeType = data.codeType;
        this.groups = data.groups;
        this.siblings = ((data.siblings==true)?true:false);
        this.friends = ((data.friends==true)?true:false);

        /*
            return this.http.post(environment.apiPath+'getCodeEvent.php',
              JSON.stringify(this.code))
              .map(response => {
                try {
                  let result = response.json();
                  if (result && result.jwt) {
                    // save data to service
                    return true;
                  }
                }
                catch(e){
                  return false;
                }
              //if (result && result.error)
              return false;
            })
        */

    }

    updateChildNav (current: number){
        if (current > this.numberOfChildren || current <= 0)
          current = 1;
        
        if (current == this.numberOfChildren) {
            this.childNav.next = 0;
            this.childNav.previous = current - 1;
        }
        else {
            this.childNav.next = current + 1;
            this.childNav.previous = current - 1;
        }

        this.childNav.current = current;
            
    }

}