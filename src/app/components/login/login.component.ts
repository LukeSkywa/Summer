import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;


  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.loginForm=this.fb.group({
      username : "",
      password : ""
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.eseguiLogin(this.loginForm.get("username").value,this.loginForm.get("password").value);
  }

  //da mettere in home
  logout(){
    this.loginService.eseguiLogout();
  }

}
