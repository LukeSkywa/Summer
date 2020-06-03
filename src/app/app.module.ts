import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './components/lista/lista.component';
import { HighlightDirective } from './directives/highlight-directive.service';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageUploadComponent } from './components/imageupload/imageupload.component';
import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';
import { SharedModule } from './shared/shared.module';








@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HighlightDirective,
    DettaglioComponent,
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
