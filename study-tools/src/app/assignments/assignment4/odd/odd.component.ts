import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() declare number: number; 
  //number of type number //@Input() to pass the data from outside inside this component

  constructor() { }

  ngOnInit(): void {
  }

}
