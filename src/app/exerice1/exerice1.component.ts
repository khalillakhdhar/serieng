import { Component } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  standalone: false,
  templateUrl: './exerice1.component.html',
  styleUrl: './exerice1.component.css'
})
export class Exerice1Component {
  nombre!:number;
  message="";
verifier()
{
  if(this.nombre==0)
  {
    this.message="le nombre est nul";
  }
  else if(this.nombre>0)
  {
    this.message="le nombre est positif";
  }
  else
  {
    this.message="le nombre est negatif";
  }

}
}
