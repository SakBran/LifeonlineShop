import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { fontSelect } from "../navigation/navigation.component";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { msgLabel } from "./../model/msgLabel";
import { appSetting } from "../app-setting";

@Component({
  selector: "app-font-selector",
  templateUrl: "./font-selector.component.html",
  styleUrls: ["./font-selector.component.css"]
})
export class FontSelectorComponent {
  addressForm = this.fb.group({
    font: [localStorage.getItem("font"), Validators.required]
  });
  fontType;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<fontSelect>,
    public dialog: MatDialog,
    private appSetting: appSetting
  ) {
    if (localStorage.getItem("font") == "z") {
      this.fontType = "z";
    } else if (localStorage.getItem("font") == "u") {
      this.fontType = "u";
    } else {
      this.fontType = "";
    }

    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
  }
  msgLabel: msgLabel;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onSubmit() {
    if (typeof this.dialogRef !== "undefined") {
      let font = "font";
      localStorage.setItem(font, this.fontType);
      location.reload(false);
      this.dialogRef.close();
    }
  }
}
