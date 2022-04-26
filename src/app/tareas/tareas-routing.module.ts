import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'show', component:ShowComponent},
      { path:'create', component:CreateComponent},
      { path:'edit/:id', component:EditComponent},
      { path:'**', redirectTo:'show'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
