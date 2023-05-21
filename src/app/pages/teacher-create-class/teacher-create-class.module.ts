import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherCreateClassPageRoutingModule } from './teacher-create-class-routing.module';

import { TeacherCreateClassPage } from './teacher-create-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherCreateClassPageRoutingModule
  ],
  declarations: [TeacherCreateClassPage]
})
export class TeacherCreateClassPageModule {}
