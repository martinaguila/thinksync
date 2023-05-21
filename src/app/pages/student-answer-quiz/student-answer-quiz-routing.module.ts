import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAnswerQuizPage } from './student-answer-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: StudentAnswerQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAnswerQuizPageRoutingModule {}
