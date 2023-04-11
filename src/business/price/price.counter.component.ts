import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: "price-counter-component",
  templateUrl: "./price.counter.component.html",
  styleUrls: [],
})
export class PriceCounterComponent implements OnInit {
  @Input() currentData: number;

  test: number;

  public currentPrice: number = 0;

  constructor() {}
  ngOnInit(): void {
    this.test = 99999;
    console.log("currentData::", this.currentData);
  }

  ngOnChanges(changes: SimpleChange): void {
    const previous = changes["currentData"].previousValue;
    const current = changes["currentData"].currentValue;
    if (previous != current) {
      this.startShuffle(previous, current);
    }
  }

  startShuffle(previous: number, current: number) {
    console.log("startShuffle");
    console.log(previous, current);
    const speed = 20;

    //let inc = 555;
    let inc = Math.ceil(Math.abs(current - previous) / 30);
    let isIncrease: boolean = true;
    if (previous < current) {
      isIncrease = true;
    } else {
      isIncrease = false;
    }
    console.log("isIncrease", isIncrease);

    let setNum = () => {
      if (isIncrease) {
        //増加パターン
        if (this.currentPrice >= current) {
          this.currentPrice = current;
          clearInterval(timer);
          console.log("clearA");
        } else {
          this.currentPrice += inc;
        }
      } else {
        //減少パターン
        if (this.currentPrice <= current) {
          this.currentPrice = current;
          clearInterval(timer);
          console.log("clearB");
        } else {
          this.currentPrice -= inc;
        }
      }
    };

    let timer = setInterval(setNum, speed);
  }
}
