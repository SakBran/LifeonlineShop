import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryNavComponent } from "./category-nav/category-nav.component";

const routes: Routes = [{ path: "category", component: CategoryNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
