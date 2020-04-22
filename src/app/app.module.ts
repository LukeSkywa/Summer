import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista/lista.component';
import { HighlightDirective } from './directives/highlight-directive.service';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomeComponent,
    MenuComponent,
    ListaComponent,
    HighlightDirective,
    DettaglioComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    SlideshowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }