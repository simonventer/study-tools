import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component implements OnInit {
  onToggle = false; //boolean value for the toggled state
  log: any[] = []; //fallback - can use type of number[] instead

  constructor() {}

  ngOnInit(): void {}

  onToggleInfo() {
    this.onToggle = !this.onToggle;
    //push a new number by adding + 1 each time
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
