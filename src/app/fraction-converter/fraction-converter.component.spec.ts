import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionConverterComponent } from './fraction-converter.component';

describe('FractionConverterComponent', () => {
  let component: FractionConverterComponent;
  let fixture: ComponentFixture<FractionConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractionConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
