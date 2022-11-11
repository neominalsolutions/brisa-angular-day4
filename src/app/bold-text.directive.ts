import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoldText]'
})
export class BoldTextDirective implements OnInit {

  @Input() fontSize:string = '24px';


  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';

   }


  ngOnInit(): void {

    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

}
