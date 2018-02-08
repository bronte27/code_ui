import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CodeDataService } from './code-data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private codeData: CodeDataService
  ) {
  }

  canActivate() {
    if (this.authService.isValidCode() && this.codeData.code) return true;
  
    this.router.navigate(['/codeentry']);
    return false;
  }
}
