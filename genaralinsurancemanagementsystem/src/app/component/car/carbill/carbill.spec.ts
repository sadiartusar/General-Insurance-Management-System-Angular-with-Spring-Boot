import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carbill } from './carbill';

describe('Carbill', () => {
  let component: Carbill;
  let fixture: ComponentFixture<Carbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carbill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
