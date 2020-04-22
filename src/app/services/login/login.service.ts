import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from 'src/app/models/user-item.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList : UserItem[] = [
    {username :"louis", password :"Qwerty99"},
    {username :"marco", password :"wasd99"}
  ]

  constructor(private router: Router) { }

  eseguiLogin(username: string, password: string) {
    if (username != null && username !== '' 
      && password != null && password !== '') {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("password", password);
      //this.router.navigateByUrl('/portale/home');
      alert('benvenuto');
    }else{
      alert('login fallita');
    }
  }

  eseguiLogout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    this.router.navigateByUrl('/login');
    alert("logout effettuato, arrivederci");
  }


}
