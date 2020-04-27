import { Component, OnInit } from '@angular/core';
import { timer } from "rxjs";

@Component({
  selector: 'app-beta-play-canzone',
  templateUrl: './beta-play-canzone.component.html',
  styleUrls: ['./beta-play-canzone.component.scss']
})
export class BetaPlayCanzoneComponent implements OnInit {
  model="stop";
 
  counter: number;
  timerRef;
  

  
  constructor() { }

  ngOnInit(): void {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if(this.model!="stop") {
        const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
        
      }
    });
  }

    
   

}
