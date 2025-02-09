import { Component } from '@angular/core';

@Component({
  selector: 'app-fact',
  standalone: false,
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.css'
})
export class FactComponent {
  valeur!:any;
  fact!:number;
  calculer=false;
  factoriel()
  {
    this.calculer=true;
    this.fact=1;
    for(let i=1;i<=this.valeur;i++)
    {
      this.fact=this.fact*i;
    }
alert(` Le factoriel de ${this.valeur} est: ${this.fact}`);
this.valeur=null;
  }



}
