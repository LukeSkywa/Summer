import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from 'src/app/models/user-item.interface';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList : UserItem[] = [
    {username: "louis" , password : "gigino1999", name: "", surname: "", gender: "", email: "", telephone: ""}
  ]

  constructor(private router: Router) { }

  getLista():UserItem[]{
    return this.usersList;
  }

  getSingolo(username:string){
    return this.usersList.find(item=>{
      return item.username === username;
    })
  }

  modificaDati(user){
    this.usersList.forEach(element => {
      if(element.username === user.username){
        element.name = user.name;
        element.surname = user.surname;
        element.gender = user.gender;
        element.email = user.email;
        element.telephone = user.telephone;
      }
    })
  }

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
        
        window.alert('benvenuto');
        this.router.navigateByUrl('/home');
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
  showLista(){
    this.usersList.forEach(element => {
      console.log(element);
      
    });
  }
}
