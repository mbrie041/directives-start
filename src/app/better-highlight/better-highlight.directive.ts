import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementReference.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementReference.nativeElement,
      "background-color",
      "blue"
    );
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementReference.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
