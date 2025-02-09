import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exerice1Component } from './exerice1/exerice1.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { TaxesComponent } from './taxes/taxes.component';
import { FactComponent } from './fact/fact.component';

const routes: Routes = [
  {path:"",redirectTo:"ex1",pathMatch:"full"},

  {path:"ex1",component: Exerice1Component},
  {path:"ex3",component:Exercice3Component},
  {
    path:"taxes",component:TaxesComponent
  },
  {path:"fact",component:FactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
