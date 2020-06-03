import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './registrazione.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegistrazioneComponent],
  imports: [
    CommonModule,
    RegistrazioneRoutingModule,
    SharedModule
  ]
})
export class RegistrazioneModule { }
