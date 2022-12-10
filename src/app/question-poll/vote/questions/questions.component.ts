import {Component, Input, OnInit} from '@angular/core';
import {Question, Topic} from "../../question-poll.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() questions: Question[];
  @Input() currentTopic: Topic;

  constructor() { }

  ngOnInit(): void {
  }

}
