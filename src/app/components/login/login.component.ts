import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { UserItem } from 'src/app/models/user-item.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checked=false;
  


  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.loginForm=this.fb.group({
      username : "",
      password : ""
    })
  }

  ngOnInit(): void {
  }

  getUsername(){
    return this.loginForm.get('username');
  }

  getPassword(){
    return this.loginForm.get("password");
  }

  login() {
    this.loginService.eseguiLogin(this.getUsername().value,this.getPassword().value);
  }

  //da mettere in home
  logout(){
    this.loginService.eseguiLogout();
  }

}
