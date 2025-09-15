import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healthpolicyshow } from './healthpolicyshow';

describe('Healthpolicyshow', () => {
  let component: Healthpolicyshow;
  let fixture: ComponentFixture<Healthpolicyshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Healthpolicyshow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Healthpolicyshow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
