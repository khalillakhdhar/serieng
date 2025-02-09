import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exerice1Component } from './exerice1/exerice1.component';
import { FormsModule } from '@angular/forms';
import { Exercice3Component } from './exercice3/exercice3.component';
import { TaxesComponent } from './taxes/taxes.component';
import { FactComponent } from './fact/fact.component';

@NgModule({
  declarations: [
    AppComponent,
    Exerice1Component,
    Exercice3Component,
    TaxesComponent,
    FactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
