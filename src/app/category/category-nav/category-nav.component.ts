import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { NavigationComponent } from "src/app/navigation/navigation.component";

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

  catOpen() {
    let catmenu = document.getElementById("searchtxt").style.visibility;
    console.log(catmenu);
    if (catmenu === "hidden") {
      document.getElementById("searchtxt").style.visibility = "visible";
    } else {
      document.getElementById("searchtxt").style.visibility = "hidden";
    }
  }
  open() {
    document.getElementById("cart").click();
  }
}
