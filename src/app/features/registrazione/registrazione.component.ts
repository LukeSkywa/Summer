import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm : FormGroup;
  passwordType : string = 'password';
  passwordShow : boolean = false;

  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.registrazioneForm=this.fb.group({
      username : "",
      password : ""
    })
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
    return this.registrazioneForm.get('username');
  }

  getPassword(){
    return this.registrazioneForm.get("password");
  }

  ngOnInit(): void {
  }

  registrazione(){
    this.loginService.eseguiRegistrazione(this.getUsername().value,this.getPassword().value);
  }

}
