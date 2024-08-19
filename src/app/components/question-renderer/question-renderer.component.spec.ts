import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRendererComponent } from './question-renderer.component';

describe('QuestionRendererComponent', () => {
  let component: QuestionRendererComponent;
  let fixture: ComponentFixture<QuestionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
