import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherSetupQuizPage } from './teacher-setup-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherSetupQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSetupQuizPageRoutingModule {}
