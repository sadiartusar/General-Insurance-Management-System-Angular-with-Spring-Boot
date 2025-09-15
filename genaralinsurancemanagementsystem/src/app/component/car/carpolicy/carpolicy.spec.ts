import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpolicy } from './carpolicy';

describe('Carpolicy', () => {
  let component: Carpolicy;
  let fixture: ComponentFixture<Carpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
