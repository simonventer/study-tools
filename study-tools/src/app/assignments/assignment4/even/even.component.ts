import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() declare number: number; 
  //number of type number //@Input() to pass the data from outside inside this component

  constructor() { }

  ngOnInit(): void {
  }

}
