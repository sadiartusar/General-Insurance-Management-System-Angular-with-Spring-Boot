import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciept } from './reciept';

describe('Reciept', () => {
  let component: Reciept;
  let fixture: ComponentFixture<Reciept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reciept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
