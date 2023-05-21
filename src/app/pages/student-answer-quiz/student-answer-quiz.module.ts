import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAnswerQuizPageRoutingModule } from './student-answer-quiz-routing.module';

import { StudentAnswerQuizPage } from './student-answer-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAnswerQuizPageRoutingModule
  ],
  declarations: [StudentAnswerQuizPage]
})
export class StudentAnswerQuizPageModule {}
