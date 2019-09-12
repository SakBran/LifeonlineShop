import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators } from "@angular/forms";
import { appSetting } from "../app-setting";
import { navigationLabel } from "../model/navigationLabel";
import { msgLabel } from "../model/msgLabel";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private appSetting: appSetting
  ) {}
  nav: navigationLabel;
  msgLabel: msgLabel;
  ngOnInit(): void {
    this.nav = Object.assign(
      this.appSetting.fontSession(this.appSetting.navTitle)
    );
    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
  }
  openDialog() {
    const dialogRef = this.dialog.open(shopCart, {
      height: "100%",
      width: "99%"
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  openFontDialog() {
    const dialogRef = this.dialog.open(fontSelect, {
      height: "100%",
      width: "99%"
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  openDialogPayment() {
    const dialogRef = this.dialog.open(payment, {
      height: "100%",
      width: "99%"
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: "shopCart",
  templateUrl: "shopCart.html"
})
export class shopCart {
  constructor(
    public dialogRef: MatDialogRef<shopCart>,
    public dialog: MatDialog,
    private appSetting: appSetting
  ) {}
  msgLabel: msgLabel;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.msgLabel = Object.assign(
      this.appSetting.fontSession(this.appSetting.msgTitle)
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialogPayment() {
    this.onNoClick();
    const dialogRef = this.dialog.open(payment, {
      height: "100%",
      width: "99%"
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: "payment",
  templateUrl: "payment.html"
})
export class payment {
  constructor(
    public dialogRef: MatDialogRef<payment>,
    private fb: FormBuilder
  ) {}

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])
    ],
    shipping: ["free", Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "American Samoa", abbreviation: "AS" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "District Of Columbia", abbreviation: "DC" },
    { name: "Federated States Of Micronesia", abbreviation: "FM" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Guam", abbreviation: "GU" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Marshall Islands", abbreviation: "MH" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Northern Mariana Islands", abbreviation: "MP" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Palau", abbreviation: "PW" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Puerto Rico", abbreviation: "PR" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virgin Islands", abbreviation: "VI" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
  ];

  onSubmit() {
    alert("Thanks!");
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: "fontSelect",
  templateUrl: "fontSelect.html"
})
export class fontSelect {
  constructor(
    public dialogRef: MatDialogRef<fontSelect>,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    alert("Thanks!");
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
