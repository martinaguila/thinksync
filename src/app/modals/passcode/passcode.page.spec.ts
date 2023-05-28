import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasscodePage } from './passcode.page';

describe('PasscodePage', () => {
  let component: PasscodePage;
  let fixture: ComponentFixture<PasscodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasscodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
