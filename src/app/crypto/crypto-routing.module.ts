import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinComponent } from './components/coin/coin.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'coin', component: CoinComponent },
      { path:'**', redirectTo:'coin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
