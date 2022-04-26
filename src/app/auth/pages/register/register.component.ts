import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario:FormGroup = this._fb.group({
    name: ['Test prueba',[ Validators.required ]],
    email:['prueba@gmail.com',[ Validators.required, Validators.email ]],
    password:['123456', [ Validators.required ]]
  })

  constructor( private _fb:FormBuilder,
               private _router:Router ) { }

  registro(){
    
  }         


}
