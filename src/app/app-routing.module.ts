import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestPage } from "../business/pages/new/estimation/sample/test.page";

const routes: Routes = [
  // {
  //   path: "test",
  //   component: TestPage,
  // },
  // //ngIfを使うために子moduleでcommonComponentをimportする方法らしいが、、できないからtestをつくらず、app.componentで修正する事にした。
  // {
  //   path: "test",
  //   loadChildren: () =>
  //     import("../business/pages/new/estimation/sample/test.module").then(
  //       (m) => m.TestModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
