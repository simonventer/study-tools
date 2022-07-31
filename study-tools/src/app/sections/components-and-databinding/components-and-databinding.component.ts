import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-and-databinding',
  templateUrl: './components-and-databinding.component.html',
  styleUrls: ['./components-and-databinding.component.css'],
})
export class ComponentsAndDatabindingComponent implements OnInit {
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
