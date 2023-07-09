import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostListener('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
