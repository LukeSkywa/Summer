import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditGuardService } from './services/guards/edit-guard.service';
import { GuardService } from './services/guards/guard.service';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista/lista.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  // { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [GuardService]},
 //  { path: 'crealista', component: CrealistaComponent, canActivate: [MyRouteGuardService]},
     { path: 'lista', component: ListaComponent, canActivate: [GuardService]},
 //  { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [MyRouteGuardService]},
     { path: 'registrati', component: RegistrazioneComponent},
     { path: 'profilo', component: ProfiloComponent, canActivate: [GuardService]},
     { path: '', redirectTo: '/login', pathMatch: 'full' },
 //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
