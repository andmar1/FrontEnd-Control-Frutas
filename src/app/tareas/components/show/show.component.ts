import { Component, OnInit } from '@angular/core';

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
