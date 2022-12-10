import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlgorithmModel} from "../../algorithm.model";

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  @Input() algo!: AlgorithmModel;
  @Output() algorithmSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.algorithmSelected.emit();
  }
}
