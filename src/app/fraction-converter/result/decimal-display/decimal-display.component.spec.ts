import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalDisplayComponent } from './decimal-display.component';

describe('DecimalDisplayComponent', () => {
  let component: DecimalDisplayComponent;
  let fixture: ComponentFixture<DecimalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
