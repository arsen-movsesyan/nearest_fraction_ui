import { Component, OnInit } from '@angular/core';
import {Question, QuestionPollService, Topic} from "../question-poll.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  selectedTopic: Topic;
  questions: any;

  topics: Topic[];


  constructor(
    private questionService: QuestionPollService
  ) { }

  ngOnInit(): void {
    this.topics = this.questionService.getAllTopics();
    this.selectedTopic = this.topics[0];
    this._fetchQuestions();
  }

  onSelectTopic(topicId: number) {
    this.selectedTopic = this.topics.find(t => t.id === topicId) || this.topics[0];
    this._fetchQuestions();
  }

  _fetchQuestions() {
    this.questions = this.questionService.getQuestionByTopic(this.selectedTopic.id);
  }
}
