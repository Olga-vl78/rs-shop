import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input('appColor') itemAmount: number | null = null;

  color: string = 'gray';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.itemAmount) {
      if (this.itemAmount >= 20) this.color = 'green';
      else if (this.itemAmount > 4 && this.itemAmount < 20)
        this.color = 'yellow';
      else if (this.itemAmount < 5) this.color = 'red';
    }
    this.renderer.setStyle(this.elRef.nativeElement, 'fill', this.color);
  }
}
