import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonCardComponent } from './neon-card.component';

describe('NeonCardComponent', () => {
  let component: NeonCardComponent;
  let fixture: ComponentFixture<NeonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
