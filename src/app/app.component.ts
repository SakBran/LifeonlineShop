import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "onlineShop";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
