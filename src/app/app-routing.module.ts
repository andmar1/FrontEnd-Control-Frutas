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
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
