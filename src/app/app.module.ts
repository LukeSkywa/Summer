import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { HighlightDirective } from './directives/highlight-directive.service';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './components/cards/cards.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MyHttpService } from './services/myhttp.service';
import { ImageUploadComponent } from './components/imageupload/imageupload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';
import { CaroselloComponent } from './components/carosello/carosello.component';
import { FooterComponent } from './components/footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomeComponent,
    MenuComponent,
    ProfiloComponent,
    ListaComponent,
    HighlightDirective,
    DettaglioComponent,
    FeedbackComponent,
    CardsComponent,
    ImageUploadComponent,
    BetaPlayCanzoneComponent,
    CaroselloComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
