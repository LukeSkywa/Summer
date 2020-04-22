import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedform:FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedform = this.fb.group({
      nome: '',
      cognome: '',
      genere:'',
      email:'',
      telelfono:'',
      commenti:'',
    });
   }

  ngOnInit(): void {
  }

}
