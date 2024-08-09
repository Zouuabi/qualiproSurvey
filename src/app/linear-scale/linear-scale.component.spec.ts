import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearScaleComponent } from './linear-scale.component';

describe('LinearScaleComponent', () => {
  let component: LinearScaleComponent;
  let fixture: ComponentFixture<LinearScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearScaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
