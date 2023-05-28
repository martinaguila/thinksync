import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizListPageRoutingModule } from './quiz-list-routing.module';

import { QuizListPage } from './quiz-list.page';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuizListPage]
})
export class QuizListPageModule {}
