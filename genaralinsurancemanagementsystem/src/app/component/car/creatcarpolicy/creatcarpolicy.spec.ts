import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creatcarpolicy } from './creatcarpolicy';

describe('Creatcarpolicy', () => {
  let component: Creatcarpolicy;
  let fixture: ComponentFixture<Creatcarpolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Creatcarpolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creatcarpolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
