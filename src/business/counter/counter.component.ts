import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "counter-component",
  templateUrl: "./counter.component.html",
  styleUrls: [],
})
export class CounterComponent implements OnInit {
  @Input() currentData: number;

  test: number;

  constructor() {}
  ngOnInit(): void {
    this.test = 99999;
    console.log("currentData::", this.currentData);
  }
}
