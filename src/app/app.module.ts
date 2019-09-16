import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  NavigationComponent,
  shopCart,
  payment,
  fontSelect
} from "./navigation/navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { ShoppingCartTableComponent } from "./shopping-cart-table/shopping-cart-table.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTreeModule } from "@angular/material/tree";
import { appSetting } from "./app-setting";
import { zawgyi2Unicode } from "./Zawgyi2Unicode";
import { unicode2zawgyi1 } from "./Unicode2Zawgyi";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FontSelectorComponent } from "./font-selector/font-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShoppingCartTableComponent,
    shopCart,
    payment,
    fontSelect,
    RegisterFormComponent,
    FontSelectorComponent
  ],
  entryComponents: [shopCart, payment, fontSelect],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTreeModule,
    InfiniteScrollModule,
    MatSlideToggleModule
  ],
  providers: [
    appSetting,
    zawgyi2Unicode,
    unicode2zawgyi1,
    {
      provide: MatDialogRef,
      useValue: {
        close: closeX
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function closeX() {
  (dialogResult: any) => {};
}
