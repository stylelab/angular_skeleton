import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { TestPage } from "./test.page";

const routes: Routes = [
  // AppRoutingModule での設定により「'test'」で「/test」というパスになっている
  // ここでhogeを指定すると「/test/hoge」となる
  { path: "", component: TestPage },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestModule {}
