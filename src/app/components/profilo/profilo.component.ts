import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  profiloForm : FormGroup;

  constructor(private fb : FormBuilder, private loginService : LoginService) {
    this.profiloForm=this.fb.group({
      name : ["", Validators.required],
      surname : ["", Validators.required],
      gender : ["", Validators.required],
      email : ["", Validators.required],
      telephone : ["", Validators.required]
    })
   }

  ngOnInit(): void {
    this.loginService.getUser(sessionStorage.getItem("user"))
  }

}
