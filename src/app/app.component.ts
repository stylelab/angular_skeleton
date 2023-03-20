import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "AngularSkeleton";

  public scrollToElement($element: any): void {
    document.getElementById($element).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  /**
   * [アコーディオン]項目を押下
   *
   */
  public isOpenAc01: boolean = true;
  public toggleAccordion($accordionID: string): void {
    console.log($accordionID);

    switch ($accordionID) {
      case "ac01":
        this.isOpenAc01 = !this.isOpenAc01;
    }
    console.log(this.isOpenAc01);
  }

  //tab
  public currentTabNum: number = 0;
  public setCurrentTabNum($number: number): void {
    this.currentTabNum = $number;
    console.log($number);
  }
}
