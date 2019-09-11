import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterFormComponent } from "./register-form/register-form.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./category/category.module").then(mod => mod.CategoryModule)
  },
  {
    path: "register",
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
