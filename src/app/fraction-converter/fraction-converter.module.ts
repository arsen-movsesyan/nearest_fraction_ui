import {NgModule} from "@angular/core";
import {FractionConverterComponent} from "./fraction-converter.component";
import {AlgorithmDetailComponent} from "./algorithm-detail/algorithm-detail.component";
import {AlgorithmListComponent} from "./algorithm-list/algorithm-list.component";
import {AlgorithmComponent} from "./algorithm-list/algorithm/algorithm.component";
import {CommonModule} from "@angular/common";
import {AlgorithmService} from "./algorithm.service";
import {FormsModule} from "@angular/forms";
import {ConverterRoutingModule} from "./converter-routing.module";
import { ConvertersComponent } from './converters/converters.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ToBinaryComponent } from './to-binary/to-binary.component';
import { ToDecimalComponent } from './to-decimal/to-decimal.component';
import { ResultComponent } from './result/result.component';
import { FractionDisplayComponent } from './result/fraction-display/fraction-display.component';
import { DecimalDisplayComponent } from './result/decimal-display/decimal-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConverterRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    FractionConverterComponent,
    AlgorithmDetailComponent,
    AlgorithmListComponent,
    AlgorithmComponent,
    ConvertersComponent,
    ToBinaryComponent,
    ToDecimalComponent,
    ResultComponent,
    FractionDisplayComponent,
    DecimalDisplayComponent
  ],
  providers: [
    AlgorithmService
  ]
})
export class FractionConverterModule {}
