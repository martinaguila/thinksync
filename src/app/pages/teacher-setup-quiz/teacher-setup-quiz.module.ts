import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherSetupQuizPageRoutingModule } from './teacher-setup-quiz-routing.module';

import { TeacherSetupQuizPage } from './teacher-setup-quiz.page';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherSetupQuizPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [TeacherSetupQuizPage]
})
export class TeacherSetupQuizPageModule {}
