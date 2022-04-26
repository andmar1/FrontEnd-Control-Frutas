import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { TareasService } from '../../services/tareas.service';


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

  crear:FormGroup = this._fb.group({
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
    this._tareasService.createPost( this.crear.value )
    this._router.navigate([''])
  }

  campoNoEsValido(campo:string){
    return this.crear.controls?.[campo]?.errors && this.crear.controls?.[campo]?.touched;
  }

  esparragosMenu:menuItem[] = [
    {
      texto:'Mostrar',
      ruta: '/tareas/show'
     },
    {
      texto:'Crear',
      ruta: '/tareas/create'
    },
    {
      texto:'Editar',
      ruta: '/tareas/edit'
    },
  ]


}
