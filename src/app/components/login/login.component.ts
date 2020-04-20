import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  passwordType : string = 'password';
  passwordShow : boolean = false;


  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.loginForm=this.fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  togglePassword(){
    if(this.passwordShow){
      this.passwordShow=false;
      this.passwordType='password';
    }else{
      this.passwordShow=true;
      this.passwordType='text';
    }
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
