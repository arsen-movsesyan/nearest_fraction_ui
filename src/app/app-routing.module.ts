import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nearest-fraction',
    loadChildren: () => import('./fraction-converter/fraction-converter.module')
      .then((mod) => mod.FractionConverterModule)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
