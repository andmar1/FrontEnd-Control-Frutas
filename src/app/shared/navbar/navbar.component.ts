import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interface';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

//colocar datos del usuario
interface menuITem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private _authService:AuthService,
               private _router:Router ) { }

  get user():Usuario{
    return {...this._authService.usuario}
  }

  // cerrar sesion
  logout(){
    this._router.navigateByUrl('')
    Swal.fire({
      icon:'info',
      text:'Sesion cerrada',
      title:'Correcto',
      timer:2000})
    
    this._authService.logout()

  }

  esparragosMenu:menuITem[] = [
    {
      texto:'Mostrar Lista',
      ruta: '/tareas/show'
     },
    {
      texto:'Crear Registro',
      ruta: '/tareas/create'
    },
    {
      texto:'Cryptomonedas',
      ruta:'/crypto/coin'
    }
  ]

  // agregar cerrar sesion
  // logout(){
  //   this._router.navigateByUrl('/auth')
  //   this._authService.logout();
  // }

}
