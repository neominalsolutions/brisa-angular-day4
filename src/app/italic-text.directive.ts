import { Directive, ElementRef } from '@angular/core';

// directivelerin sadece ts dosyası var.

@Directive({
  selector: '[appItalicText]'
})
export class ItalicTextDirective {

  

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.fontStyle = 'italic';
   }

}
