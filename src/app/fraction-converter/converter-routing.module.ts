import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FractionConverterComponent} from "./fraction-converter.component";
import {ToBinaryComponent} from "./to-binary/to-binary.component";
import {ToDecimalComponent} from "./to-decimal/to-decimal.component";

const routes: Routes = [
  {path: '', component: FractionConverterComponent, children: [
      {path: 'to-binary', component: ToBinaryComponent},
      {path: 'to-decimal', component: ToDecimalComponent},
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule {}
