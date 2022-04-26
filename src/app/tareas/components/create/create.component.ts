import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { TareasService } from '../../services/tareas.service';

import Swal from 'sweetalert2';


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
    nombre: ['', [ Validators.required ]],
    empresa: ['', [ Validators.required ]],
    kilos: ['', [ Validators.required ]],
    precio: ['', [ Validators.required ]],
    fecha: ['', [ Validators.required ]],
  })

  constructor( private _fb:FormBuilder,
               private _tareasService:TareasService,
               private _router:Router ) { }

  ngOnInit(): void {
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
    }
  ]


}
