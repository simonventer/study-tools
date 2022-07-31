import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;

  constructor() { }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) =>{
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 800);
      }
    );
    return promise;
  }

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false; 
  }
}
