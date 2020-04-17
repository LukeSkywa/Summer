import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListaComponent } from './lista/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> cb70bb2d73589172ea24d2622c036ca6c4a03d80

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> cb70bb2d73589172ea24d2622c036ca6c4a03d80
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
