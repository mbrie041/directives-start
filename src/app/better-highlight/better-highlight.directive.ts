import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColour: string = "transparent";
  @Input("appBetterHighlight") highlightColour: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColour: string =
    "transparent";

  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.backgroundColour = this.defaultColour;
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
    this.backgroundColour = this.highlightColour;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementReference.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColour = this.defaultColour;
  }
}
