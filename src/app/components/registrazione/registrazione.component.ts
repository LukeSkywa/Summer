import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.registrazioneForm=this.fb.group({
      username : "",
      password : ""
    })
  }

  ngOnInit(): void {
  }

  registrazione(){
    
  }

}
