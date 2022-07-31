import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  //define the type of data we want to Emit -> this is the data we expect from the section5.component - <app-cockpit> (main component)
  //this is serverCreated, and blueprintCreated
  //Add parentheses () at end to call the constructor of the of EventEmitter and create a new eventEmitter object
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // @Output() blueprintCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>();

  //Comment out as we are using local references on the component
  //public newServerName = '';
  //public newServerContent = '';

  //local reference fetched through @ViewChild
  //pass argument -> the selector of the element ex: 'serverContentInput'
  @ViewChild('serverContentInput') declare serverContentInput: ElementRef;

  constructor() {}

  //lifecycle hook - view more about lifecycle hooks
  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    //call your event we set up at the top
    //call the emit method -> emit a new event of this type
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  // onAddBlueprint() {
  //   //call your event we set up at the top
  //   //call the emit method -> emit a new event of this type
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddBlueprint(contentInput: HTMLInputElement) {
    //to get the type reference
    console.log(this.serverContentInput);
    //call your event we set up at the top
    //call the emit method -> emit a new event of this type
    this.blueprintCreated.emit({
      serverName: contentInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
