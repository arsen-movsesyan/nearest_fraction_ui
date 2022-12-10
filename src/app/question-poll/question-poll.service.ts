import {Injectable} from "@angular/core";
import {topics, questions} from "../../playground/questions";
import {from} from 'rxjs';

export interface Topic {
  id: number,
  topic: string
}

export interface Question {
  id: number,
  topic_id: number,
  question: string,
  voted_up: number,
  voted_down: number
}

@Injectable()
export class QuestionPollService {

  getAllTopics(): Topic[] {
    return topics;
  }

  getQuestionByTopic(topicId: number) {
    return questions.filter(q => q.topic_id === topicId);
  }
}
