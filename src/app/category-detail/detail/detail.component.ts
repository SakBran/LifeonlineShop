import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Router, ActivatedRoute } from "@angular/router";
import { categoryLabel } from "src/app/model/categoryLabel";
import { msgLabel } from "src/app/model/msgLabel";
import { appSetting } from "src/app/app-setting";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent {
  cols = 6;
  rowsx = 1;
  rows = 1;
  drawer = "open";
  dataCategory: categoryLabel;
  msgLabel: msgLabel;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private appSetting: appSetting
  ) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 6;
          this.appSetting.colsx = 2;
        } else {
          this.cols = 6;
          this.appSetting.colsx = 1;
        }
      });
    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
    this.dataCategory = Object.assign(
      this.appSetting.fontSession(this.appSetting.catTitle)
    );
  }
  id = +this.route.snapshot.paramMap.get("id");
}
