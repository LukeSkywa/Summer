import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { ListaComponent } from './lista/lista/lista.component';

//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
   // { path: 'login', component: LoginComponent,canActivate: [EditRouteGuard] },
   // { path: 'home', component: HomeComponent },
  //  { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [MyRouteGuardService]},
  //  { path: 'crealista', component: CrealistaComponent, canActivate: [MyRouteGuardService]},
      { path: 'lista', component: ListaComponent},
  //  { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [MyRouteGuardService]},
  //  { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditRouteGuard]},
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //  { path: '**', component: PageNotFoundComponent }
=======
import { LoginComponent } from './components/login/login.component';
import { EditGuardService } from './services/guards/edit-guard.service';
import { GuardService } from './services/guards/guard.service';


//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'funzionalita', component: FunzionalitaComponent, canActivate: [GuardService]},
 //  { path: 'crealista', component: CrealistaComponent, canActivate: [MyRouteGuardService]},
 //  { path: 'lista', component: ListaComponent, canActivate: [MyRouteGuardService]},
 //  { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [MyRouteGuardService]},
 //  { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditRouteGuard]},
      { path: '', redirectTo: '/login', pathMatch: 'full' },
 //  { path: '**', component: PageNotFoundComponent }
>>>>>>> cb70bb2d73589172ea24d2622c036ca6c4a03d80
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
