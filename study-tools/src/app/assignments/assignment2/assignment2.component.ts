import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component implements OnInit {
  userName: string = '';

  constructor() {}

  ngOnInit(): void {}

  //Click function for the button
  onResetUserName() {
    //reset the input field
    this.userName = '';
  }
}
