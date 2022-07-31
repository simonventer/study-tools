import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private whatever: ElementRef) { }

  ngOnInit() {
    //not the best practice
    this.whatever.nativeElement.style.backgroundColor = 'green';
  }

}
