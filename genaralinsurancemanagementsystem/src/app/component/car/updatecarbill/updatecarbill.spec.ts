import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecarbill } from './updatecarbill';

describe('Updatecarbill', () => {
  let component: Updatecarbill;
  let fixture: ComponentFixture<Updatecarbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatecarbill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecarbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
