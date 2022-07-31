import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen; //onclick isOpen = true
  }
  constructor() { }

  //For clicking anywhere else and the dropdown to close use this code.
  /*
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}*/

}
