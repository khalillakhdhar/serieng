import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serieng';
  constructor() {
    for(let i=0;i<=20;i++)
    {
      if(i%2==0)
      {
        console.log(`i= ${i}` );
      }
    }

  }
}
