import { Component, OnInit } from '@angular/core';
import { Coin } from '../../interface/Coin.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coins:Coin[] = [];

  // arreglo para busqueda 
  filteredCoins:Coin[] = []

  // Configuracion de la tabla
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];

  searchText = '';


  constructor( private _http:HttpClient ) { }

  searchCoin(){
    this.filteredCoins = this.coins.filter((coin)=>
      coin.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }


  ngOnInit(): void {
    this._http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe( (res) =>{
        this.coins = res
        this.filteredCoins = res  //Copia de los datos filtrados
      },
      (err =>{
        console.log( err)
      }))
  }

}
