import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TareasRoutingModule } from './tareas-routing.module';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    ShowComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class TareasModule { }
