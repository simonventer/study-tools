import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //Get the condition as a input
  //bind to a property call unless
  //Whenerer this condition changes, execute the method using set
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      //creates a view in this view container = createEmbeddedView
      this.bar.createEmbeddedView(this.foo)
    }else{
      //remove everything from the view container
      this.bar.clear();
    }
  }
 
  constructor(private foo: TemplateRef<any>, private bar: ViewContainerRef) { }

}
