import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherCreateQuizPage } from './teacher-create-quiz.page';

describe('TeacherCreateQuizPage', () => {
  let component: TeacherCreateQuizPage;
  let fixture: ComponentFixture<TeacherCreateQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeacherCreateQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
