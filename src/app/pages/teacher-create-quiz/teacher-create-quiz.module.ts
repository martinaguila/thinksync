import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherCreateQuizPageRoutingModule } from './teacher-create-quiz-routing.module';

import { TeacherCreateQuizPage } from './teacher-create-quiz.page';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherCreateQuizPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeacherCreateQuizPage]
})
export class TeacherCreateQuizPageModule {}
