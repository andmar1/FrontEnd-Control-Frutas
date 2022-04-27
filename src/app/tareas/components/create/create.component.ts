import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { TareasService } from '../../services/tareas.service';

import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/interface';


interface menuItem{
  texto:string;
  ruta:string;
} 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  crearForm:FormGroup = this._fb.group({
    nombre: ['Antonio Andrade', [ Validators.required, Validators.min(0) ]],
    empresa: ['', [ Validators.required, Validators.min(0) ]],
    kilos: ['', [ Validators.required, Validators.min(0) ]],
    precio: ['', [ Validators.required, Validators.min(0) ]],
    fecha: ['', [ Validators.required ]],
  })

  constructor( private _fb:FormBuilder,
               private _tareasService:TareasService,
               private _router:Router,
               private _authService:AuthService ) { }

  ngOnInit(): void {
  }

  get user():Usuario{
    return {...this._authService.usuario}
  }


  onSubmit(){
    this._tareasService.createPost( this.crearForm.value )
    
    Swal.fire({
      icon:'success',
      text:'Creación correcta',
      title:'Creado',
      timer:2000})

    this._router.navigate(['/tareas/show'])
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
  
  campoNoEsValido(campo:string){
    return this.crearForm.controls?.[campo]?.errors && this.crearForm.controls?.[campo]?.touched;
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
