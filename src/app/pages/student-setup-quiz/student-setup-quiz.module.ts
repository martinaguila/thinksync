import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSetupQuizPageRoutingModule } from './student-setup-quiz-routing.module';

import { StudentSetupQuizPage } from './student-setup-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSetupQuizPageRoutingModule
  ],
  declarations: [StudentSetupQuizPage]
})
export class StudentSetupQuizPageModule {}
