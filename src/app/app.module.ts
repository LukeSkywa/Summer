import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight-directive.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';
import { SharedModule } from './shared/shared.module';








@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
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
