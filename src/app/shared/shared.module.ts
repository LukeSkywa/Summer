import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatSlideToggleModule,
    NgbModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
