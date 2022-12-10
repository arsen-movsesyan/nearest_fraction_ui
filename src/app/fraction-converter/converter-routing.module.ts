import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FractionConverterComponent} from "./fraction-converter.component";

const routes: Routes = [
  {path: '', component: FractionConverterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule {}
