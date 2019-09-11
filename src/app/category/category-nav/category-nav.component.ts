import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { NavigationComponent } from "src/app/navigation/navigation.component";
import { categoryLabel } from "src/app/model/categoryLabel";
import { appSetting } from "src/app/app-setting";
import { msgLabel } from "src/app/model/msgLabel";

@Component({
  selector: "app-category-nav",
  templateUrl: "./category-nav.component.html",
  styleUrls: ["./category-nav.component.css"]
})
export class CategoryNavComponent {
  cols = 1;
  rows = 1;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appSetting: appSetting
  ) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 6;
        } else {
          this.cols = 2;
        }
      });
  }

  catOpen() {
    let catmenu = document.getElementById("searchtxt").style.visibility;
    if (catmenu === "hidden") {
      document.getElementById("searchtxt").style.visibility = "visible";
      document.getElementById("searchbtn").style.visibility = "visible";
      document.getElementById("cat-grid").style.visibility = "visible";
      document.getElementById("cat-grid-close").style.visibility = "visible";
    } else {
      document.getElementById("searchtxt").style.visibility = "hidden";
      document.getElementById("searchbtn").style.visibility = "hidden";
      document.getElementById("cat-grid").style.visibility = "hidden";
      document.getElementById("cat-grid-close").style.visibility = "hidden";
    }
  }
  open() {
    document.getElementById("cart").click();
  }
  dataCategory: categoryLabel;
  msgLabel: msgLabel;
  ngOnInit(): void {
    this.dataCategory = Object.assign(
      this.appSetting.fontSession(this.appSetting.catTitle)
    );
    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          document.getElementById("searchtxt").style.minWidth = "150px";
          document.getElementById("searchtxt").style.maxWidth = "150px";
        } else {
          document.getElementById("searchtxt").style.minWidth = "300px";
          document.getElementById("searchtxt").style.maxWidth = "300px";
        }
      });
  }
}
