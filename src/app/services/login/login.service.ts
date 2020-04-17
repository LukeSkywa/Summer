import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  eseguiLogin(username: string, password: string) {
    if (username != null && username !== '' 
      && password != null && password !== '') {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("password", password);
      this.router.navigateByUrl('/portale/home');
      alert('benvenuto');
    }else{
      alert('login fallita');
    }
  }

  eseguiLogout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    this.router.navigateByUrl('/login');
    alert("logout effettuato, arrivederci");
  }


}
