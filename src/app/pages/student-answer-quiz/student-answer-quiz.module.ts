import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAnswerQuizPageRoutingModule } from './student-answer-quiz-routing.module';

import { StudentAnswerQuizPage } from './student-answer-quiz.page';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAnswerQuizPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [StudentAnswerQuizPage]
})
export class StudentAnswerQuizPageModule {}
