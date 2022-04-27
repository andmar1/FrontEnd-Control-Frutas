import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CryptoRoutingModule } from './crypto-routing.module';

// componentes 
import { CoinComponent } from './components/coin/coin.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    CoinComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    FormsModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CryptoModule { }
