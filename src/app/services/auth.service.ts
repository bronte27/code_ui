import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { CodeDataService } from './code-data.service';

@Injectable()
export class AuthService {
  errorMessage: string;

  constructor(private http: Http, private codeData: CodeDataService) {
 

  }

  validateCode(code) {
    return this.http.post(environment.apiPath+'auth/code',
      JSON.stringify(code),
    )
      .map(response => {
        try {
          let result = response.json();
          if (result && result.jwt) {
            localStorage.setItem('token', result.jwt);
            return true;
          }
          
        }
        catch(e){
          return false;
        }
      //if (result && result.error)
      return false;
    })
  }



  isValidCode() {
    let status = tokenNotExpired();


    if (!status) 
      this.codeData.clearCodeData();

    return status;

  }

}
