import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() startedGame = new EventEmitter<{
    startNumber: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  startGame() {}

  stopGame() {}
}
