import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatebill } from './updatebill';

describe('Updatebill', () => {
  let component: Updatebill;
  let fixture: ComponentFixture<Updatebill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatebill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatebill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
