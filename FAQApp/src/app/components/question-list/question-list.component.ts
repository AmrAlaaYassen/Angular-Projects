import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Question } from '../../models/Question';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  questions: Question[];
  constructor(public data: DataService) {

  }

  ngOnInit() {
    this.questions = this.data.getQuestions();
  }

  addQuestion(question: Question) {
    this.data.addQuestion(question);
  }

}
