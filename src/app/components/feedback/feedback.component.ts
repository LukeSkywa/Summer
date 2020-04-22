import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { MyHttpService } from 'src/app/services/myhttp.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedform:FormGroup;

  constructor(private fb: FormBuilder,private myHttpService: MyHttpService) {
    this.feedform = this.fb.group({
      nome: '',
      cognome: '',
      genere:'',
      email:'',
      telefono:'',
      commenti:'',
    });
   }

   onSubmit(contactForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.myHttpService.invia('https://formspree.io/mwkngpoo',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            window.alert("invio effettuato");
            console.log(response);
          }
        );
    }
  }

  ngOnInit(): void {
  }

}
