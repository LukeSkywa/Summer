import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { RegistrazioneService } from 'src/app/services/registrazione/registrazione.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm : FormGroup;

  constructor(private fb : FormBuilder, private registrazioneService : RegistrazioneService) {
    this.registrazioneForm=this.fb.group({
      username : "",
      password : ""
    })
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
    this.registrazioneService.eseguiRegistrazione(this.getUsername().value,this.getPassword().value);
  }

}
