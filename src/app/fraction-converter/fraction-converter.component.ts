import { Component, OnInit } from '@angular/core';
import {AlgorithmModel} from "./algorithm.model";
import {AlgorithmService} from "./algorithm.service";

@Component({
  selector: 'app-fraction-converter',
  templateUrl: './fraction-converter.component.html',
  styleUrls: ['./fraction-converter.component.css']
})
export class FractionConverterComponent implements OnInit {
  algorithms: AlgorithmModel[] = [];
  selectedAlgorithm!: AlgorithmModel;
  constructor(private algorithmsService: AlgorithmService) {
  }

  ngOnInit() {
    this.algorithmsService.getAlgorithms()
      .subscribe((algorithms) => {
        this.algorithms = algorithms;
      })
  }

  algorithmSelected(algo: AlgorithmModel) {
    this.selectedAlgorithm = algo;
  }
}
