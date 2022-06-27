import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //boolean value
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Test Server2'];

  //constructor is a special type of method used to create an object.
  constructor() {
    //-	Method executed at the point of time this component is created by angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  //Click function for the button
  onCreateServer() {
    //update the paragraph and replace the text with the below text
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
