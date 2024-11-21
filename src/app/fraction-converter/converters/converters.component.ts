import { Component, OnInit } from '@angular/core';
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-converters',
  templateUrl: './converters.component.html',
  styleUrls: ['./converters.component.css']
})
export class ConvertersComponent implements OnInit {
  activeConvertor: number;
  readonly faAngleDoubleRight = faAngleDoubleRight;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/fraction-converter/to-binary') {
      this.activeConvertor = 1;
    } else if (this.router.url === '/fraction-converter/to-decimal') {
      this.activeConvertor = 2;
    } else {
      this.activeConvertor = 0;
    }
  }

  selectConvertor(convertor: number) {
    let route;
    this.activeConvertor = convertor;
    if (this.activeConvertor === 1) {
      route = 'to-binary';
    } else if (this.activeConvertor === 2) {
      route = 'to-decimal';
    }
    this.router.navigate(['/fraction-converter', route]);
  }
}
