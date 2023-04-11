import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { PriceCounterComponent } from "../business/price/price.counter.component";

@NgModule({
  declarations: [AppComponent, PriceCounterComponent], //コンポネ登録
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], //ここにもコンポネ登録
})
export class AppModule {}
