import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //CamelCase import - accessing the DOM property which doesnt know dashes
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    //better to use renderer for DOM manipulations.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.defaultColor;
  }

  //Reactive directive
  //New decorator - HostListener with a method we want to execute mouseover
  @HostListener('mouseover') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
