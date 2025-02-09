import { Component } from '@angular/core';

@Component({
  selector: 'app-taxes',
  standalone: false,
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css'
})
export class TaxesComponent {
  salaireBrut!:number;
  salaireNet!:number;
  taux=0;
  calculeTaxes()
  {
    if(this.salaireBrut<2000)
    {
      this.taux=0;

    }
    else if(this.salaireBrut<=5000)
    {
      this.taux=this.salaireBrut*0.1;
    }
    else
    {
      this.taux=this.salaireBrut*0.2;
    }
    this.salaireNet=this.salaireBrut-this.taux;


  }

}
