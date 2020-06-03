import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [FooterComponent,MenuComponent],
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
    ReactiveFormsModule,
    MenuComponent

  ]
})
export class SharedModule { }
