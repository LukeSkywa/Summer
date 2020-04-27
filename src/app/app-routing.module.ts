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

//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'immagine', component: ImageUploadComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'feedback', component: FeedbackComponent},
    { path: 'lista', component: ListaComponent},
    { path: 'dettaglio/:id', component: DettaglioComponent},
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
