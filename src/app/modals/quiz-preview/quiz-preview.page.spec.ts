import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizPreviewPage } from './quiz-preview.page';

describe('QuizPreviewPage', () => {
  let component: QuizPreviewPage;
  let fixture: ComponentFixture<QuizPreviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuizPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
