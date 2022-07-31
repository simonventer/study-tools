import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number){
    //console.log(firedNumber);
    if(firedNumber % 2 === 0){
      //if firedNumber is odd number
      this.oddNumbers.push(firedNumber)
    }else{
      //if firedNumber is even number
      this.evenNumbers.push(firedNumber)
    }
  }

}
