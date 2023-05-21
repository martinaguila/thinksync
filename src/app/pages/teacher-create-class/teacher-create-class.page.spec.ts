import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherCreateClassPage } from './teacher-create-class.page';

describe('TeacherCreateClassPage', () => {
  let component: TeacherCreateClassPage;
  let fixture: ComponentFixture<TeacherCreateClassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeacherCreateClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
