import { Directive, ElementRef } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[ngxDropdownInput]'
})
export class DropdownInputDirective {
  constructor(
    public dropdown: DropdownDirective,
    elementRef: ElementRef
  ) {
    dropdown.inputElement = elementRef.nativeElement;
  }
}
