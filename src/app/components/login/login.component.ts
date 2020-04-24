import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
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

  checked=true;
  


  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.loginForm=this.fb.group({
      username : ["", Validators.required],
      password : ["", Validators.compose([Validators.required, Validators.minLength(7)])]
    })
  }

  ngOnInit(): void {
    
   if(sessionStorage.getItem("usernameS")!=null){
    this.loginForm=this.fb.group({
      username : sessionStorage.getItem("usernameS"),
      password : sessionStorage.getItem("passwordS")
    })
   }
    
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

  get usernameControl():FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl():FormControl{
    return this.loginForm.get('password') as FormControl;
  }



  getUsername(){
    return this.loginForm.get('username');
  }

  getPassword(){
    return this.loginForm.get("password");
  }

  login() {
    this.loginService.eseguiLogin(this.getUsername().value,this.getPassword().value);
    this.salva();
  }
  salva(){
    if(this.checked===true){
    sessionStorage.setItem("usernameS",this.getUsername().value);
    sessionStorage.setItem("passwordS",this.getPassword().value);
    }
  }
  modifica(){
    this.checked=!this.checked;
    console.log(this.checked);
  }

  //da mettere in home
  logout(){
    this.loginService.eseguiLogout();
  }

}
