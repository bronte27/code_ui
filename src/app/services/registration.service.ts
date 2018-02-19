import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
//import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThankYouFormComponent } from '../thank-you-form/thank-you-form.component';
import { ThankYouResponse } from '../interfaces/code.interface';




@Injectable()
export class RegistrationService {
    errorMessage: string;

    constructor(
        //public authHttp: AuthHttp
        //public http: Http
        public http: HttpClient
    ) {

    }

    postRegistration(data) {
/*
        return this.http.post(
                environment.apiPath + 'registration',
                JSON.stringify(data)
            )
              .subscribe(
                data => console.log(data),
                err => console.log(err)
            );
*/          


      return this.http.post<ThankYouResponse>(
            environment.apiPath + 'registration',
            JSON.stringify(data)
        );
/*        
        .map((response) => {
                try {
                    console.log(response);
                    return response;
                }
                catch (e) {
                    return false;
                }

            })
*/
    }


}
