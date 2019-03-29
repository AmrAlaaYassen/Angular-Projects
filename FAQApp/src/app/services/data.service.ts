import { Injectable } from '@angular/core';
import {Question} from '../models/Question';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [];
  }

   getQuestions() {
    if (localStorage.getItem('q') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('q'));
    }

    return this.questions;
   }

   addQuestion(question: Question) {
     this.questions.unshift(question);
     let questions;
     if (localStorage.getItem('q') === null ) {
       questions = [];
       questions.unshift(question);
       localStorage.setItem('q', JSON.stringify(questions));
     } else {
       questions = JSON.parse(localStorage.getItem('q'));
       console.log(questions);
       questions.unshift(question);
       localStorage.setItem('q', JSON.stringify(questions));
     }
   }

   removeQuestion(question: Question) {
     if (localStorage.getItem('q') !== null) {
      for ( let i = 0 ;  i < this.questions.length; i++) {
        if (this.questions[i] === question) {
          this.questions.splice(i, 1);
        }
      }

      localStorage.setItem('q', JSON.stringify(this.questions));
     }

   }
}
