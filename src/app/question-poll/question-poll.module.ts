import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {QuestionPollComponent} from "./question-poll.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {VoteComponent} from "./vote/vote.component";
import {QuestionPollRoutingModule} from "./question-poll-routing.module";
import {QuestionPollService} from "./question-poll.service";
import { QuestionsComponent } from './vote/questions/questions.component';
import { QuestionComponent } from './vote/questions/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionPollRoutingModule
  ],
  declarations: [
    QuestionPollComponent,
    HowItWorksComponent,
    VoteComponent,
    QuestionsComponent,
    QuestionComponent
  ],
  providers: [
    QuestionPollService
  ]
})
export class QuestionPollModule {}
