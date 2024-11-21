import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDecimalComponent } from './to-decimal.component';

describe('ToDecimalComponent', () => {
  let component: ToDecimalComponent;
  let fixture: ComponentFixture<ToDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
