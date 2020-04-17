import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from 'src/app/models/user-item.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  username : string;
  password : string;

  usersList : UserItem[] = [
            {username :"louis", password :"Qwerty99"},              
            {username :"marco", password :"wasd99"}
  ]
  constructor(private router: Router) { }

  eseguiRegistrazione(username: string, password: string) {
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
}
