import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPreviewPage } from './quiz-preview.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPreviewPageRoutingModule {}
