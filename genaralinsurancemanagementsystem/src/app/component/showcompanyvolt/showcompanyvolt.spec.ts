import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcompanyvolt } from './showcompanyvolt';

describe('Showcompanyvolt', () => {
  let component: Showcompanyvolt;
  let fixture: ComponentFixture<Showcompanyvolt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Showcompanyvolt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showcompanyvolt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
