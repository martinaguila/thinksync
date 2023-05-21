import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherSetupQuizPage } from './teacher-setup-quiz.page';

describe('TeacherSetupQuizPage', () => {
  let component: TeacherSetupQuizPage;
  let fixture: ComponentFixture<TeacherSetupQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeacherSetupQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
