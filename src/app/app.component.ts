import {Component, OnInit} from '@angular/core';
import {AlgorithmService} from "./algorithm.service";
import {AlgorithmModel} from "./algorithm.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
