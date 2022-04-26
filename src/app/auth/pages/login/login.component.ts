import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario:FormGroup = this._fb.group({
    email:[ '',[ Validators.required, Validators.email ]],
    password:[ '',[Validators.required, Validators.minLength(6)] ]
    
  })  

  constructor( private _fb:FormBuilder,
               private _router:Router,
              ) { }


  login(){
    
  }

  send(){
    console.log( this.miFormulario.value )
    console.log( this.miFormulario.valid )
  }
}
