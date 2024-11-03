import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCountComponent } from './question-count.component';

describe('QuestionCountComponent', () => {
  let component: QuestionCountComponent;
  let fixture: ComponentFixture<QuestionCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCountComponent]
    });
    fixture = TestBed.createComponent(QuestionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
