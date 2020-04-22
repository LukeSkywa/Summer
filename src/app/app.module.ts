import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfiloComponent } from './components/profilo/profilo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomeComponent,
    MenuComponent,
    ProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
