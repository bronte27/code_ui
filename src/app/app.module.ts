import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CodeEntryFormComponent } from './code-entry-form/code-entry-form.component';
import { ContactEntryFormComponent } from './contact-entry-form/contact-entry-form.component';
import { ChildEntryFormComponent } from './child-entry-form/child-entry-form.component';
import { ConfirmDetailsFormComponent } from './confirm-details-form/confirm-details-form.component';
import { ThankYouFormComponent } from './thank-you-form/thank-you-form.component';
import { CodeDataService } from './services/code-data.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CapitalizeFirstPipe } from './pipes/capitalizefirst.pipe';
import { ConvertDaysPipe } from './pipes/convertdays.pipe';
import { GetNamePipe } from './pipes/get-name.pipe';
import { RegistrationService } from './services/registration.service';
//import { provideAuth } from 'angular2-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopService } from './services/scroll-to-top.service';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CodeEntryFormComponent,
    ContactEntryFormComponent,
    ChildEntryFormComponent,
    ConfirmDetailsFormComponent,
    ThankYouFormComponent,
    CapitalizeFirstPipe,
    ConvertDaysPipe,
    GetNamePipe

  ],
  bootstrap:[AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CodeEntryFormComponent },
      { path: 'codeentry', component: CodeEntryFormComponent },
      { path: 'contactentry', component: ContactEntryFormComponent, canActivate: [AuthGuard] },
      { path: 'childentry/:child', component: ChildEntryFormComponent, canActivate: [AuthGuard] },
      { path: 'confirmdetails', component: ConfirmDetailsFormComponent, canActivate: [AuthGuard] },
      { path: 'thankyou', component: ThankYouFormComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'codeentry', pathMatch: 'full'  }
    ]),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['192.168.172.131','192.168.1.121','localhost','www.littleworldphotography.com.au'],
        throwNoTokenError: true
      }
    })

  ],
  providers: [
    CodeDataService, 
    AuthService,
    AuthGuard,
    RegistrationService,
    ScrollTopService
  ]
})
export class AppModule { }
