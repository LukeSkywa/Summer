import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { HighlightDirective } from './directives/highlight-directive.service';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';

import { ImageUploadComponent } from './components/imageupload/imageupload.component';

import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';
import { SharedModule } from './shared/shared.module';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    MenuComponent,
    ProfiloComponent,
    ListaComponent,
    HighlightDirective,
    DettaglioComponent,
    FeedbackComponent,
    CardsComponent,
    ImageUploadComponent,
    BetaPlayCanzoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
