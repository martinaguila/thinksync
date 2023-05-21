import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherSetupQuizPageRoutingModule } from './teacher-setup-quiz-routing.module';

import { TeacherSetupQuizPage } from './teacher-setup-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherSetupQuizPageRoutingModule
  ],
  declarations: [TeacherSetupQuizPage]
})
export class TeacherSetupQuizPageModule {}
