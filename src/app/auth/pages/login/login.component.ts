import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup = this._fb.group({
      email:['test3@gmail.com', [ Validators.required, Validators.email ]],
      password: ['123456', [Validators.required, Validators.minLength(6) ]]
  })
  
  constructor( private _fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
