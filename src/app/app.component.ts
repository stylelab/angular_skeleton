import { Component, ViewChild, Input, AfterViewInit } from "@angular/core";

//apex-charts
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  ApexStroke,
} from "ng-apexcharts";

//apex-charts
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  title = "AngularSkeleton";

  //apex-charts
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;

  //apex-charts
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          type: "bar",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: "My-series",
          type: "bar",
          data: [20, 31, 45, 41, 39, 72, 79, 81, 128],
        },
        {
          name: "Revenue",
          type: "line",
          data: [20, 29, 37, 36, 44, 45, 50, 58, 62],
        },
      ],
      chart: {
        height: 350,
        type: "line", //最後の折れ線用にこれを指定するっぽい。謎。
        //type: "bar",
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
      fill: {
        opacity: 0.1, //効かない。謎
      },
    };

    //chart-2
    this.chartOptions2 = {
      series: [
        {
          name: "PRODUCT A",
          type: "bar",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "PRODUCT B",
          type: "bar",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "PRODUCT C",
          type: "bar",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "PRODUCT D",
          type: "bar",
          data: [21, 7, 25, 13, 22, 8],
        },
        // {
        //   name: "PRODUCT E",
        //   type: "line",
        //   data: [21, 7, 25, 13, 22, 8],
        // },
      ],
      chart: {
        //        type: "line",
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        //折れ線がないとき効く
        opacity: 0.1,
        colors: ["#f00", "#00f", "#0f0", "#000", "#ccc", "#f00"],
      },
      stroke: {
        //折れ線がないとき効く
        show: false,
        colors: ["#f00", "#00f", "#0f0", "#000", "#ccc"],
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

  //counter
  counterData: number = 12445; //シンプル用
  counterData2: number = 12445; //おすすめ用

  public setCounterData($number: number): void {
    //this.counterData = $number;
    //this.counterData = 50000;
    let n = Math.ceil(Math.random() * 20000);
    this.counterData = n;
    let m = Math.ceil(Math.random() * 20000);
    this.counterData2 = m;
  }

  //sticky
  public stickyObject;
  public stickyBox;
  public stickyTrigger; //このオブジェクトの位置でstickyObjectの表示が切り替わる
  public isStickyFix = false;
  ngAfterViewInit(): void {
    //todo:stickyObjectそのものを固定するか、別のDOMを登場させるかでやり方が変わる。今はそのものを固定してy座標が変わってしまうので一度fixしてしまうとバグってる。この場合は実装を変える必要あり。
    //stickyObjectの位置ではなく、その下の要素の位置を検知して計算すれば良さそう。

    this.stickyObject = document.querySelector(".sticky-object");
    this.stickyBox = document.querySelector(".sticky-test-box"); //本家だと大本のdivのwrapperがこれになりそう。＝いらない。
    this.stickyTrigger = document.querySelector(".sticky-trigger");

    this.checkScrollValue();

    this.stickyBox.addEventListener("scroll", () => {
      this.checkScrollValue();
    });
    window.addEventListener("resize", () => {
      this.checkScrollValue();
    });
  }

  public checkScrollValue(): void {
    let stickyTriggerPosY = this.stickyTrigger.getBoundingClientRect().top;
    let stickyBoxPosY = this.stickyBox.getBoundingClientRect().top; //本家だと0で良いかも？

    if (stickyBoxPosY - stickyTriggerPosY > 0) {
      this.isStickyFix = true;
    } else {
      this.isStickyFix = false;
    }
  }
}
