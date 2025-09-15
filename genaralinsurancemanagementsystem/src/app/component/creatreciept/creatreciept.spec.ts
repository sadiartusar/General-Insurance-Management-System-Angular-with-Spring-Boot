import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatreciept } from './creatreciept';

describe('Creatreciept', () => {
  let component: Creatreciept;
  let fixture: ComponentFixture<Creatreciept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Creatreciept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatreciept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
