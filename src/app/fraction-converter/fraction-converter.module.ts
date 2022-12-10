import {NgModule} from "@angular/core";
import {FractionConverterComponent} from "./fraction-converter.component";
import {AlgorithmDetailComponent} from "./algorithm-detail/algorithm-detail.component";
import {AlgorithmListComponent} from "./algorithm-list/algorithm-list.component";
import {AlgorithmComponent} from "./algorithm-list/algorithm/algorithm.component";
import {CommonModule} from "@angular/common";
import {AlgorithmService} from "./algorithm.service";
import {FormsModule} from "@angular/forms";
import {ConverterRoutingModule} from "./converter-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConverterRoutingModule
  ],
  declarations: [
    FractionConverterComponent,
    AlgorithmDetailComponent,
    AlgorithmListComponent,
    AlgorithmComponent
  ],
  providers: [
    AlgorithmService
  ]
})
export class FractionConverterModule {}
