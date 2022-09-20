import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'o.9s');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.10s');
  }
}
