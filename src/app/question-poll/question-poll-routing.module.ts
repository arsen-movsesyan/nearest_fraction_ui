import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuestionPollComponent} from "./question-poll.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {VoteComponent} from "./vote/vote.component";

const routes: Routes = [
  {path: 'home', component: QuestionPollComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'vote', component: VoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionPollRoutingModule {}
