import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    NgbModule
  ],
  exports:[
    CommonModule,
    FooterComponent,
    MatCardModule,
    MatSlideToggleModule,
    NgbModule,

  ]
})
export class SharedModule { }
