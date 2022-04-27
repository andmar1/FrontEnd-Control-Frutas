import { Component, OnInit } from '@angular/core';
// model
import { Registro } from '../../model/Registro';
import { TareasService } from '../../services/tareas.service';

import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/interface';
import { Router } from '@angular/router';

interface menuItem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Post:Registro[];

  constructor( private _tareasService:TareasService,
               private _authService:AuthService,
               private _router:Router) { }

  get user():Usuario{
    return {...this._authService.usuario}
  }

  ngOnInit(): void {
    this._tareasService.getPost()
      .subscribe( (resp)=> {
        this.Post = resp.map(( e )=>{
          return {
            id:e.payload.doc.id,
            ...(e.payload.doc.data() as Registro)
          }
        })
      })
      
  }

  deleteRow = ( post ) => {
    this._tareasService.deletePost( post )
    Swal.fire({
      icon:'warning',
      text:'Borrado correcto',
      title:'Eliminado',
      timer:2000 })
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
  

  esparragosMenu:menuItem[] = [
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



}
