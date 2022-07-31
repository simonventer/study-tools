import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  //How to bind to our own properties INSIDE of your component

  //"Usign declare -> "There is a property called name of type string. I shouldn't have to prove to you that name actually exists, but I want to use it anyway."
  //adding a decorator @Input
  // @Input() declare element: { type: string; name: string; content: string };

  //How to bind to our own properties OUTSIDE of your component
  @Input('srvElement') declare element: {
    type: string;
    name: string;
    content: string;
  };

  //onChanges testing - binding to a primitive wuth name: string;
  @Input() declare name: string;
  @ViewChild('heading') declare header: ElementRef; //using heading -> the local reference
  @ContentChild('contentParagraph') declare paragraph: ElementRef; //using paragraph -> the local reference

  //Lifecycles Hooks
  constructor() {
    console.log('constructor called!');
  }
  //Lifecycles Hooks
  ngOnChanges(changes: SimpleChanges) {
    //SimpleChanges - angular built in
    console.log('ngOnChanges called!'); //only hook that revieved an argument
    console.log(changes);
  }
  //Lifecycles Hooks
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(
      'Text Content of header: ' + this.header.nativeElement.textContent
    );
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  //Called only once
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log(
      'Text Content of header: ' + this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
}
