import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-category-nav",
  templateUrl: "./category-nav.component.html",
  styleUrls: ["./category-nav.component.css"]
})
export class CategoryNavComponent {
  cols = 1;
  rows = 1;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 2;
        } else {
          this.cols = 1;
        }
      });
  }
}
