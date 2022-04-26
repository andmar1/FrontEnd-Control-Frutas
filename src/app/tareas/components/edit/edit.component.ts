import { Component, OnInit } from '@angular/core';

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
