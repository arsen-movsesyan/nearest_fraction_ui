import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AlgorithmListComponent } from './algorithm-list/algorithm-list.component';
import { AlgorithmComponent } from './algorithm-list/algorithm/algorithm.component';
import {AlgorithmService} from "./algorithm.service";
import {HttpClientModule} from "@angular/common/http";
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlgorithmListComponent,
    AlgorithmComponent,
    AlgorithmDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlgorithmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
