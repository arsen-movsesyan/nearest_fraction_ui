import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-decimal-display',
  templateUrl: './decimal-display.component.html',
  styleUrls: ['./decimal-display.component.css']
})
export class DecimalDisplayComponent implements OnInit {
  @Input() decimal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
