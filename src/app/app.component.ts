import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "onlineShop";

  ngOnInit(): void {
    this.checkfont();
  }

  checkfont() {
    const el = document.createElement("canvas");
    const ctx = el.getContext("2d");
    const kaWidth = ctx.measureText("က").width;
    const patSintWidth = ctx.measureText("က္က").width;
    if (kaWidth === patSintWidth) {
      let font = "font";
      localStorage.setItem(font, "u");
    } else {
      let font = "font";
      localStorage.setItem(font, "z");
    }
  }
}
