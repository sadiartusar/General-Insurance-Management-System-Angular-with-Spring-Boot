import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountforadmin } from './accountforadmin';

describe('Accountforadmin', () => {
  let component: Accountforadmin;
  let fixture: ComponentFixture<Accountforadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accountforadmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accountforadmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
