import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carreciept } from './carreciept';

describe('Carreciept', () => {
  let component: Carreciept;
  let fixture: ComponentFixture<Carreciept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carreciept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carreciept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
