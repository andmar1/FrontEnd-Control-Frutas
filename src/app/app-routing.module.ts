import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guard/validar-token.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path:'barra',
    loadChildren:() => import('./shared/shared.module').then (m=>m.SharedModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ]
  },
  {
    path:'tareas',
    loadChildren:() => import('./tareas/tareas.module').then(m => m.TareasModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ]
  },
  {
    path:'crypto',
    loadChildren:() => import('./crypto/crypto.module').then(m => m.CryptoModule),
    canActivate:[ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ]
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
