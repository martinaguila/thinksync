import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentSetupQuizPage } from './student-setup-quiz.page';

describe('StudentSetupQuizPage', () => {
  let component: StudentSetupQuizPage;
  let fixture: ComponentFixture<StudentSetupQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentSetupQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
