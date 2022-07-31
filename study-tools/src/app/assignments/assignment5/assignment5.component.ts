import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [UsersService]
})
export class Assignment5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
