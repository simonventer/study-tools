import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  collapsed = true;
  loadedFeature: string = 'recipe';
  constructor() { }

  ngOnInit(): void {
  }
}
