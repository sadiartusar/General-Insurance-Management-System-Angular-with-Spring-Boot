import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecarpolicy } from './updatecarpolicy';

describe('Updatecarpolicy', () => {
  let component: Updatecarpolicy;
  let fixture: ComponentFixture<Updatecarpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatecarpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecarpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
