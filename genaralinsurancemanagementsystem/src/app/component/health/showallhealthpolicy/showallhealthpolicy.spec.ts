import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showallhealthpolicy } from './showallhealthpolicy';

describe('Showallhealthpolicy', () => {
  let component: Showallhealthpolicy;
  let fixture: ComponentFixture<Showallhealthpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Showallhealthpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showallhealthpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
