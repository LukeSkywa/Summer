import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserItem } from 'src/app/models/user-item.interface';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  profiloForm : FormGroup;
  utente : string;
  usersList : UserItem[];
  user : UserItem;

  constructor(private fb : FormBuilder, private listaUsers : LoginService) {
    this.profiloForm=this.fb.group({
      name : ["", Validators.required],
      surname : ["", Validators.required],
      gender : ["", Validators.required],
      email : ["", Validators.required],
      telephone : ["", Validators.required]
    })

    this.utente=sessionStorage.getItem('user');
   }

  ngOnInit(): void {
  }

  modifica(user:UserItem){
    this.profiloForm = this.fb.group({
      name : user.name,
      surname : user.surname,
      gender : user.gender,
      email : user.email,
      telephone : user.telephone
    })
  }

  showForm(username:string){
    this.user=this.listaUsers.getSingolo(String(username));
    this.modifica(this.user);
  }

  onSubmit(form){
    this.listaUsers.modificaDati(form);
    this.usersList=this.listaUsers.getLista();
    window.alert("modifica effettuata");
  }

}
