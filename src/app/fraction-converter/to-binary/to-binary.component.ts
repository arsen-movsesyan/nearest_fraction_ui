import { Component, OnInit } from '@angular/core';
import {AlgorithmService} from "../algorithm.service";
import {ResultModel} from "../result.model";

@Component({
  selector: 'app-to-binary',
  templateUrl: './to-binary.component.html',
  styleUrls: ['./to-binary.component.css']
})
export class ToBinaryComponent implements OnInit {
  fraction: number;
  precision: number;
  result: ResultModel;
  precisions: {value: number, precision: number}[];

  constructor(
    private algorithmService: AlgorithmService,
  ) { }

  ngOnInit(): void {
    this.reset();
    this.precisions = this.algorithmService.getPrecisions();
    // this.result = {
    //   whole: 0,
    //   decimal: -3.44,
    //   precision: 5,
    //   fraction: " -3 15/32",
    //   numerator: 15,
    //   denominator: 32,
    // }
  }

  convert() {
    this.algorithmService.getResult(this.fraction, this.precision)
      .subscribe((result: ResultModel) => {
        this.result = result;
      });
    // this.reset();
  }

  reset() {
    this.fraction = 0;
    this.precision = 5;
  }
}
