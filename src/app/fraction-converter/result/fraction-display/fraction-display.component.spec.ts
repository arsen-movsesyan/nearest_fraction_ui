import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionDisplayComponent } from './fraction-display.component';

describe('FractionDisplayComponent', () => {
  let component: FractionDisplayComponent;
  let fixture: ComponentFixture<FractionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
