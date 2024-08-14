import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleMatrixComponent } from './double-matrix.component';

describe('DoubleMatrixComponent', () => {
  let component: DoubleMatrixComponent;
  let fixture: ComponentFixture<DoubleMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
