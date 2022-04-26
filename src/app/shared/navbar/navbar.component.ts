import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get usuario(){   //jalar get de servicio auth, tenemos actualizada la informacion
    return this._authService.usuario
  }

  constructor( private _router:Router, 
               private _authService:AuthService ) { }

  logout(){
    this._router.navigateByUrl('/auth')
    this._authService.logout();
  }

}
