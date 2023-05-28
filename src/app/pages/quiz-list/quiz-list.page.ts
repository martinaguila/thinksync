import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.page.html',
  styleUrls: ['./quiz-list.page.scss'],
})
export class QuizListPage implements OnInit {

  quizLists;

  constructor() {

    // initialize quiz setup
    this.quizLists = JSON.parse(localStorage.getItem("quizes") || '[]');
    console.log(this.quizLists)
   }

  ngOnInit() {
  }

}
