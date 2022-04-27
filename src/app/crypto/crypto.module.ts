import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CoinComponent } from './components/coin/coin.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    CoinComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CryptoModule { }
