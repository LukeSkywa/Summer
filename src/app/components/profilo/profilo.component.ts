import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserItem } from 'src/app/models/user-item.interface';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';


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
  daModificare=false;
  isShow=false;
  isShow_form=true;

  constructor(private fb : FormBuilder, private listaUsers : LoginService, private router : Router) {
    this.profiloForm=this.fb.group({
      name : ["", Validators.required],
      surname : ["", Validators.required],
      gender : ["", Validators.required],
      email : ["", Validators.required],
      telephone : ["", Validators.required]
    })

    
   }

  hide(){
    //rendo invisibile il div mettendo isShow a true
    this.isShow = !this.isShow;
  }

  hide_form(){
    //rendo invisibile il form mettendo isShow_form a true
    this.isShow_form = !this.isShow_form;
    //rendo di nuovo visibile il div
    this.isShow = false;
  }

  undo(){
    //rendo invisibile il form mettendo isShow_form a true
    this.isShow_form = !this.isShow_form;
    //rendo di nuovo visibile il div
    this.isShow = false;
    
  }

  ngOnInit(): void {
    this.utente=sessionStorage.getItem('user');
    this.showForm(this.utente);
    this.daModificare=false;
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
  }

  onSubmit(form){
    this.user.name=form.name;
    this.user.email=form.email;
    this.user.surname=form.surname;
    this.user.gender=form.gender;
    this.user.telephone=form.telephone;

    this.listaUsers.modificaDati(this.user);
    this.usersList=this.listaUsers.getLista();
    this.listaUsers.showLista();
    // window.alert("modifica effettuata");
    this.daModificare=false;
  }

  cliccato(){
    this.modifica(this.user);
    this.daModificare=true;
  }
}
