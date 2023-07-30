import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  public isLogged(): boolean {
    let currentUser = JSON.parse(sessionStorage.getItem('CURRENT_USER')!);
    let token = sessionStorage.getItem('TOKEN_VALUE');
    return Boolean(currentUser && token);
  }

  public getAccessToken() {
    return sessionStorage.getItem('TOKEN_VALUE');
  }



}
