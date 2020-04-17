import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { EditGuardService } from './services/guards/edit-guard.service';
import { GuardService } from './services/guards/guard.service';


//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [GuardService]},
 //  { path: 'crealista', component: CrealistaComponent, canActivate: [MyRouteGuardService]},
     { path: 'lista', component: ListaComponent},
 //  { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [MyRouteGuardService]},
 //  { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditRouteGuard]},
      { path: '', redirectTo: '/login', pathMatch: 'full' },
 //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
