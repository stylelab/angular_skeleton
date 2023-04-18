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

  public currentPrice: number = 0;
  public timer;

  constructor() {}
  ngOnInit(): void {
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
    const speed = 20;
    clearInterval(this.timer);

    let inc = Math.ceil(Math.abs(current - previous) / 30);
    let isIncrease: boolean = true;
    if (previous < current) {
      isIncrease = true;
    } else {
      isIncrease = false;
    }

    let setNum = () => {
      if (isIncrease) {
        //増加パターン
        if (this.currentPrice >= current) {
          this.currentPrice = current;
        } else {
          this.currentPrice += inc;
        }
      } else {
        //減少パターン
        if (this.currentPrice <= current) {
          this.currentPrice = current;
        } else {
          this.currentPrice -= inc;
        }
      }
    };

    this.timer = setInterval(setNum, speed);
  }
}
