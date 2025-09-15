import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatehealthpolicy } from './updatehealthpolicy';

describe('Updatehealthpolicy', () => {
  let component: Updatehealthpolicy;
  let fixture: ComponentFixture<Updatehealthpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatehealthpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatehealthpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
