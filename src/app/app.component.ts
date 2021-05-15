import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmiyc';
  isDynamic = false;
  distanceCVS = 0;
  vitesseC = 0;
  vitesseVS = 0;
  resultMinutes = 0;
  resultSecondes = 0;  

  onClick()
  {
    var result = 0;

    if (this.isDynamic)
    {
      if (this.vitesseC > this.vitesseVS)
      {
        result = ( this.distanceCVS / (this.vitesseC - this.vitesseVS)) * 60;
      }
      else 
      {
        result = ( this.distanceCVS / (this.vitesseVS - this.vitesseC)) * 60;
      }
    }
    else
    {
      result = ( this.distanceCVS / this.vitesseC) * 60;
    }

    // why ? 
    if(result < 0)
    {
      result *= -1;
    }

    this.resultMinutes = Math.floor(result);
    this.resultSecondes = Math.floor((result - this.resultMinutes) * 60);
  }
}
