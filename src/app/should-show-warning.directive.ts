import { Directive } from '@angular/core';

@Directive({
  selector: '[appShouldShowWarning]'
})
export class ShouldShowWarningDirective {

  constructor() { }

}
