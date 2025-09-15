import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carbillcreat } from './carbillcreat';

describe('Carbillcreat', () => {
  let component: Carbillcreat;
  let fixture: ComponentFixture<Carbillcreat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carbillcreat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carbillcreat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
