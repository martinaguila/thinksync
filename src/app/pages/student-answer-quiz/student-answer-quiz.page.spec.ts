import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentAnswerQuizPage } from './student-answer-quiz.page';

describe('StudentAnswerQuizPage', () => {
  let component: StudentAnswerQuizPage;
  let fixture: ComponentFixture<StudentAnswerQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentAnswerQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
