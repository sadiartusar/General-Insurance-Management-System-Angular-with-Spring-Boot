import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatcarreciept } from './creatcarreciept';

describe('Creatcarreciept', () => {
  let component: Creatcarreciept;
  let fixture: ComponentFixture<Creatcarreciept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Creatcarreciept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatcarreciept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
