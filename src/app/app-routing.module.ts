import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerice1Component } from './exerice1/exerice1.component';
import { Exercice3Component } from './exercice3/exercice3.component';

const routes: Routes = [
  {path:"",redirectTo:"ex1",pathMatch:"full"},

  {path:"ex1",component: Exerice1Component},
  {path:"ex3",component:Exercice3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
