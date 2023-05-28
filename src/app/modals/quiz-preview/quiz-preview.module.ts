import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPreviewPageRoutingModule } from './quiz-preview-routing.module';

import { QuizPreviewPage } from './quiz-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPreviewPageRoutingModule
  ],
  declarations: [QuizPreviewPage]
})
export class QuizPreviewPageModule {}
