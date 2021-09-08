import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elementReference.nativeElement,
      "background-color",
      "blue"
    );
  }
}
