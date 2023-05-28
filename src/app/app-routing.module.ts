import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'teacher-setup-quiz',
    loadChildren: () => import('../app/pages/teacher-setup-quiz/teacher-setup-quiz.module').then( m => m.TeacherSetupQuizPageModule)
  },
  {
    path: 'teacher-create-quiz',
    loadChildren: () => import('../app/pages/teacher-create-quiz/teacher-create-quiz.module').then( m => m.TeacherCreateQuizPageModule)
  },
  {
    path: 'teacher-create-class',
    loadChildren: () => import('../app/pages/teacher-create-class/teacher-create-class.module').then( m => m.TeacherCreateClassPageModule)
  },
  {
    path: 'student-answer-quiz',
    loadChildren: () => import('../app/pages/student-answer-quiz/student-answer-quiz.module').then( m => m.StudentAnswerQuizPageModule)
  },
  {
    path: 'student-setup-quiz',
    loadChildren: () => import('../app/pages/student-setup-quiz/student-setup-quiz.module').then( m => m.StudentSetupQuizPageModule)
  },
  {
    path: 'quiz-list',
    loadChildren: () => import('../app/pages/quiz-list/quiz-list.module').then( m => m.QuizListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./modals/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./modals/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'passcode',
    loadChildren: () => import('./modals/passcode/passcode.module').then( m => m.PasscodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
