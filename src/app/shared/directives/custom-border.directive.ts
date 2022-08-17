import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customBorder]'
})
export class CustomBorderDirective implements OnInit {
  @Input('customBorder') creationDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    const container = this.el.nativeElement;
    const today = new Date();
    const checkingDate = new Date();
    checkingDate.setDate(checkingDate.getDate() - 14);
    if (this.creationDate < today && this.creationDate >= checkingDate) {
      this.renderer.setElementStyle(container, 'border', '1px solid green');
    } else if (this.creationDate > today) {
      this.renderer.setElementStyle(container, 'border', '1px solid blue');
    }
  }
}
