import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlgorithmModel} from "../algorithm.model";

@Component({
  selector: 'app-algorithm-list',
  templateUrl: './algorithm-list.component.html',
  styleUrls: ['./algorithm-list.component.css']
})
export class AlgorithmListComponent implements OnInit {
  @Input() algorithms: AlgorithmModel[] = []
  @Output() algorithmSelected = new EventEmitter<AlgorithmModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onAlgorithmSelected(algo: AlgorithmModel) {
    this.algorithmSelected.emit(algo);
  }
}
