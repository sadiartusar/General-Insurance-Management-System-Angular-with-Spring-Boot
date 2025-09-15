import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatpolicy } from './creatpolicy';

describe('Creatpolicy', () => {
  let component: Creatpolicy;
  let fixture: ComponentFixture<Creatpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Creatpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
