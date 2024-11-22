import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AlgorithmModel} from "../algorithm.model";
import {NgForm} from "@angular/forms";
import {AlgorithmService} from "../algorithm.service";
import {ResultModel} from "../result.model";

@Component({
  selector: 'app-algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})
export class AlgorithmDetailComponent implements OnInit {
  @ViewChild('f') submitForm!: NgForm;
  @Input() algorithm!: AlgorithmModel;
  result!: ResultModel;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const value = this.submitForm.value;
    this.algorithmService.getResultForToBinary(value.decimalFraction, value.precision)
      .subscribe((result) => {
        this.result = result;
      })

  }
}
