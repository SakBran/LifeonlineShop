import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import {
  ShoppingCartTableDataSource,
  ShoppingCartTableItem
} from "./shopping-cart-table-datasource";

@Component({
  selector: "app-shopping-cart-table",
  templateUrl: "./shopping-cart-table.component.html",
  styleUrls: ["./shopping-cart-table.component.css"]
})
export class ShoppingCartTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<
    ShoppingCartTableItem
  >;
  dataSource: ShoppingCartTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name", "remove"];

  ngOnInit() {
    this.dataSource = new ShoppingCartTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
