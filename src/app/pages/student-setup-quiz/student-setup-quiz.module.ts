import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSetupQuizPageRoutingModule } from './student-setup-quiz-routing.module';

import { StudentSetupQuizPage } from './student-setup-quiz.page';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSetupQuizPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [StudentSetupQuizPage]
})
export class StudentSetupQuizPageModule {}
