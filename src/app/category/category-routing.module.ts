import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryNavComponent } from "./category-nav/category-nav.component";

const routes: Routes = [
  { path: "", component: CategoryNavComponent },
  {
    path: "/:id",
    loadChildren: () =>
      import("../category-detail/category-detail.module").then(
        mod => mod.CategoryDetailModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
