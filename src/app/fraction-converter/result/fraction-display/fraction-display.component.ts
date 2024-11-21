import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fraction-display',
  templateUrl: './fraction-display.component.html',
  styleUrls: ['./fraction-display.component.css']
})
export class FractionDisplayComponent implements OnInit {
  @Input() whole: number;
  @Input() numerator: number;
  @Input() denominator: number;

  constructor() { }

  ngOnInit(): void {
  }

}
