import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepolicy } from './updatepolicy';

describe('Updatepolicy', () => {
  let component: Updatepolicy;
  let fixture: ComponentFixture<Updatepolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatepolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatepolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
