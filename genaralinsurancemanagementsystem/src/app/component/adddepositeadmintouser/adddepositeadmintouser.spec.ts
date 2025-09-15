import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adddepositeadmintouser } from './adddepositeadmintouser';

describe('Adddepositeadmintouser', () => {
  let component: Adddepositeadmintouser;
  let fixture: ComponentFixture<Adddepositeadmintouser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adddepositeadmintouser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adddepositeadmintouser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
