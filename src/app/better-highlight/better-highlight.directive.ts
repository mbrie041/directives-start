import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColour: string =
    "transparent";

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
    // this.renderer.setStyle(
    //   this.elementReference.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColour = "blue";
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementReference.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColour = "transparent";
  }
}
