import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healthbody } from './healthbody';

describe('Healthbody', () => {
  let component: Healthbody;
  let fixture: ComponentFixture<Healthbody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Healthbody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Healthbody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
