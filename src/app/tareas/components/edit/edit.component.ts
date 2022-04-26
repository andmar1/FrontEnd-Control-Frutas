import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { IRegistro } from '../../interface/IRegistro';


interface menuItem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  postRef:IRegistro;

  editarForm:FormGroup = this._fb.group({
    nombre:[ '',[ Validators.required ] ],
    empresa:[ '',[ Validators.required ] ],
    kilos:[ '',[ Validators.required ] ],
    precio:[ '',[ Validators.required ] ],
    fecha:[ '',[ Validators.required ] ]
  })

  constructor( private _fb:FormBuilder,
               private _tareasService:TareasService,
               private _activeRouter:ActivatedRoute,
               private _router:Router) { }

  ngOnInit(): void {

    const id = this._activeRouter.snapshot.paramMap.get('id');

    this._tareasService.getPostPorId(id)
        .subscribe( (resp:IRegistro) =>{
          this.postRef= resp
          this.editarForm = this._fb.group({
            nombre: [ this.postRef.nombre],
            empresa: [ this.postRef.empresa],
            kilos: [ this.postRef.kilos],
            precio: [ this.postRef.precio],
            fecha: [ this.postRef.fecha]
          })
        })
  }
  onSubmit(){
    const id = this._activeRouter.snapshot.paramMap.get('id');

    this._tareasService.uppdatePost( this.editarForm.value, id );
    Swal.fire({
      icon:'info',
      text:'Edicion correcta',
      title:'Editado',
      timer:2000})

    this._router.navigate(['/tareas/edit'])
  
  }

  campoNoEsValido( campo:string ){
    return this.editarForm.controls?.[campo]?.errors && this.editarForm.controls?.[campo].touched;
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
