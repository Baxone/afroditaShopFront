import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate() {
    if (localStorage.getItem('token') !== null) {
      //estoy logado
      return true;
    } else {
      //no estoy logado
      return false;
    }
  }

}
