import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentSetupQuizPage } from './student-setup-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: StudentSetupQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSetupQuizPageRoutingModule {}
