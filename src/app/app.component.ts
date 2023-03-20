import { Component, ViewChild } from "@angular/core";

//apex-charts
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from "ng-apexcharts";

//apex-charts
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "AngularSkeleton";

  //apex-charts
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  //apex-charts
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      title: {
        text: "My First Angular Chart",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    };
  }

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
