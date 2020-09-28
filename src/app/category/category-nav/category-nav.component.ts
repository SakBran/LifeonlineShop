import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
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
  drawer = "open";
  dataCategory: categoryLabel;
  msgLabel: msgLabel;

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
          this.cols = 3;
        }
      });
    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
    this.dataCategory = Object.assign(
      this.appSetting.fontSession(this.appSetting.catTitle)
    );
  }
  font() {
    document.getElementById("zawgyi_uni").click();
  }
  onScrollUp() {
    console.log("UP");
  }
  onScrollDown() {
    // To call next items!!!
    console.log("DOWN");
    this.items.push(1);
  }
  catOpen() {
    let catmenu = document.getElementById("searchtxt").style.visibility;
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          if (catmenu === "hidden") {
            this.visible();
          } else if (catmenu === "visible") {
            this.hidden();
          }
        } else {
          if (this.drawer == "open") {
            this.drawer = "close";
            this.cols = 2;
          } else {
            this.drawer = "open";
            this.cols = 3;
          }
        }
      });
  }
  open() {
    document.getElementById("cart").click();
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          document.getElementById("searchtxt").style.minWidth = "150px";
          document.getElementById("searchtxt").style.maxWidth = "150px";
          this.hidden();
        } else {
          document.getElementById("searchtxt").style.minWidth = "300px";
          document.getElementById("searchtxt").style.maxWidth = "300px";
          this.visible;
        }
      });
    this.drawer = "open";
  }

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  visible() {
    document.getElementById("searchtxt").style.visibility = "visible";
    document.getElementById("searchbtn").style.visibility = "visible";
    document.getElementById("cat-grid").style.visibility = "visible";
    document.getElementById("cat-grid-close").style.visibility = "visible";
  }
  hidden() {
    document.getElementById("searchtxt").style.visibility = "hidden";
    document.getElementById("searchbtn").style.visibility = "hidden";
    document.getElementById("cat-grid").style.visibility = "hidden";
    document.getElementById("cat-grid-close").style.visibility = "hidden";
  }
}
