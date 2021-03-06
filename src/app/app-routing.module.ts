import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditGuardService } from './services/guards/edit-guard.service';
import { GuardService } from './services/guards/guard.service';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CardsComponent } from './components/cards/cards.component';
import { ImageUploadComponent } from './components/imageupload/imageupload.component';
import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';

//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [EditGuardService]},
    { path: 'home', component: HomeComponent },
    { path: 'immagine', component: ImageUploadComponent, canActivate: [GuardService]},
    { path: 'cards', component: CardsComponent, canActivate: [GuardService]},
    { path: 'feedback', component: FeedbackComponent, canActivate: [GuardService]},
    { path: 'lista', component: ListaComponent, canActivate: [GuardService]},
    { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [GuardService]},
    { path: 'beta', component: BetaPlayCanzoneComponent, canActivate: [GuardService]},
    { path: 'profilo', component: ProfiloComponent, canActivate: [GuardService]},
    { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditGuardService]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
