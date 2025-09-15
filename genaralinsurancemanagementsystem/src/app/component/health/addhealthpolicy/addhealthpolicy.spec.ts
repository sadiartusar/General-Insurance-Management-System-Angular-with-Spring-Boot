import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addhealthpolicy } from './addhealthpolicy';

describe('Addhealthpolicy', () => {
  let component: Addhealthpolicy;
  let fixture: ComponentFixture<Addhealthpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addhealthpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addhealthpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
