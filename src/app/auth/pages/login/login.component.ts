import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// sweete alert
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent {

  miFormulario:FormGroup = this._fb.group({
    email:['andmar@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [Validators.required, Validators.minLength(6) ]]
  })

  constructor( private _fb:FormBuilder,
               private _router:Router,
               private _authService:AuthService ) { }

  login(){
    // extraer datos del formulario 
    const { email, password } = this.miFormulario.value

    this._authService.login( email, password )
        .subscribe( ok =>{  
          // console.log(ok) //booleano
          if (ok === true) {   //validar que el ok sea verdadero 
            this._router.navigateByUrl('/barra') //si tenemos ok correcto podemos acceder a dashboard
            Swal.fire({
              icon:'success',
              text:'Login correcto',
              title:'Login correcto'})
          }
          else{
            //TODO: mostrar mensaje de error
            Swal.fire({
              icon:'error',
              text:ok,
              title:'Login incorrecto'
            })
          }
        });
  }

  campoNoEsValido( campo:string){
    return this.miFormulario.controls?.[campo]?.errors && this.miFormulario.controls?.[campo]?.touched;
  }

}
