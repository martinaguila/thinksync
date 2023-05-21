import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherCreateClassPage } from './teacher-create-class.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherCreateClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherCreateClassPageRoutingModule {}
