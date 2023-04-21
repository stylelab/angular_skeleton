import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: "price-diff-component",
  templateUrl: "./price.diff.component.html",
  styleUrls: ["./price.diff.component.scss"],
})
export class PriceDiffComponent implements OnInit {
  @Input() currentData: number;

  public displaySign: string = "";
  public displayNumber: number = 0;

  public isView = false;

  public timerID;
  public timerID2;

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange): void {
    const previous = changes["currentData"].previousValue;
    const current = changes["currentData"].currentValue;

    //this.displayDiff(previous, current);
    // //初回処理スルー(previous==undefine)
    if (previous > 0) {
      this.displayDiff(previous, current);
    }
  }

  displayDiff(previous: number, current: number) {
    if (previous == current) {
      this.displaySign = "";
      this.displayNumber = 0;
    } else if (previous >= current) {
      this.displaySign = "-";
      this.displayNumber = previous - current;
    } else {
      this.displaySign = "+";
      this.displayNumber = current - previous;
    }

    //display class toggle
    const delayTime = 500;
    this.isView = false;

    //表示
    clearTimeout(this.timerID);
    this.timerID = setTimeout(() => {
      this.isView = true;
    }, 1);

    //非表示
    clearTimeout(this.timerID2);
    this.timerID2 = setTimeout(() => {
      this.isView = false;
    }, 3500);
  }
}
