import { Component, OnInit } from '@angular/core';
// model
import { Registro } from '../../model/Registro';
import { TareasService } from '../../services/tareas.service';

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

  constructor( private _tareasService:TareasService ) { }

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


  deleteRow( post:string ){

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
