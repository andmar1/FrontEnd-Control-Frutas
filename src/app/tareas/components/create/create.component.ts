import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
