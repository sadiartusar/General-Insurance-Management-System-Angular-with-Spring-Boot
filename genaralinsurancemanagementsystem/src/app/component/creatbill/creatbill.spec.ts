import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatbill } from './creatbill';

describe('Creatbill', () => {
  let component: Creatbill;
  let fixture: ComponentFixture<Creatbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Creatbill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
