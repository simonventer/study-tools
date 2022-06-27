import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css'],
})
export class Section5Component implements OnInit {
  //We moved this to the cockpit.component.ts file
  //public newServerName = '';
  //public newServerContent = '';

  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a server' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    //splce at the first element 0, just 1 element
    this.serverElements.splice(0, 1);
  }
}
