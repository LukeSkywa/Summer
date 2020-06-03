import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditGuardService } from './services/guards/edit-guard.service';
import { GuardService } from './services/guards/guard.service';
import { ListaComponent } from './components/lista/lista.component';

import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { ImageUploadComponent } from './shared/components/imageupload/imageupload.component';
import { BetaPlayCanzoneComponent } from './components/beta-play-canzone/beta-play-canzone.component';

//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [

    { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'immagine', component: ImageUploadComponent, canActivate: [GuardService]},
    { path: 'lista', component: ListaComponent, canActivate: [GuardService]},
    { path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [GuardService]},
    { path: 'beta', component: BetaPlayCanzoneComponent, canActivate: [GuardService]},

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'cards', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },

    { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
    { path: 'registrazione', loadChildren: () => import('./features/registrazione/registrazione.module').then(m => m.RegistrazioneModule) },

    { path: 'profilo', loadChildren: () => import('./features/profilo/profilo.module').then(m => m.ProfiloModule) },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
