import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMatrixComponent } from './simple-matrix.component';

describe('SimpleMatrixComponent', () => {
  let component: SimpleMatrixComponent;
  let fixture: ComponentFixture<SimpleMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
