import { Component } from '@angular/core';
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

  constructor(  ) { }

  esparragosMenu:menuITem[] = [
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

  // agregar cerrar sesion
  // logout(){
  //   this._router.navigateByUrl('/auth')
  //   this._authService.logout();
  // }

}
