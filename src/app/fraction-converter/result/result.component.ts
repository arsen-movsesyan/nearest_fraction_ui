import {Component, Input, OnInit} from '@angular/core';
import {ResultModel} from "../result.model";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons/faLongArrowAltRight";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: ResultModel;
  @Input() convertor: number;
  constructor() { }

  ngOnInit(): void {
  }

  readonly faLongArrowAltRight = faLongArrowAltRight;
}
