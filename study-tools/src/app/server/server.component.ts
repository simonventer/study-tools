import { Component } from '@angular/core'; //3. Import component

//2. adding a component decorator with a @ sign
@Component({
  //4. pass javascript object to configure it
  selector: 'app-server', //5. basically the 'html' tag which you are using
  templateUrl: './server.component.html', //6. after creating the html file, link it here
  styleUrls: ['./server.component.css'],
  //7. after linking your template, go to app.module.ts
})
//1. write export class so that we can use it outside of this file too
export class ServerComponent {
  public serverId: number = 10;
  public serverStatus: string = 'offline';

  //built in method each typescript class has
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  //create a method that can read string interpolation
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online'
      ? 'rgb(160 203 160 / 25%)'
      : 'rgb(229 156 156 / 25%)';
  }
  getTextColor() {
    return this.serverStatus === 'online' ? '#b6d7b6' : '#e1a4a4';
  }
}
