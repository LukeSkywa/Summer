import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from 'src/app/models/user-item.interface';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList : UserItem[] = [
    {username: "louis" , password : "gigino"}
  ]

  constructor(private router: Router) { }


  autenticazione(username : string, password : string){
    let response = false;
    //scorro la lista e cpontrollo gli username
    this.usersList.forEach(element =>{
      if(element.username===username && element.password===password)
      response = true;
    });
    return response;
  }

  eseguiLogin(username: string, password: string) {
      // se response === true -> permetto la login
      if(this.autenticazione(username,password)){
        sessionStorage.setItem("user", username);
        //sessionStorage.setItem("password", password);
        //non ancora implementato
        //this.router.navigateByUrl('/portale/home');
        window.alert('benvenuto');
      }else{
        window.alert('login fallita');
    }
  }

  eseguiRegistrazione(username: string, password: string) {
    let controllo=false;
    //controllo con un foreach se username inserito è già presente
    this.usersList.forEach(element => {
      if(element.username===username){
        window.alert("attenzione utente già esistente!")
        controllo=true;
        this.router.navigateByUrl("/registrati");
      }
    });

    if(controllo===false){
    let temp:UserItem={username,password};
    this.usersList.push(temp);
    this.router.navigateByUrl("/login");
    }
  }

  eseguiLogout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.alert("logout effettuato, arrivederci");
    this.router.navigateByUrl('/login');
    
  }
}
