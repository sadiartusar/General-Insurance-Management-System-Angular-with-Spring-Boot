import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFireCoverNote } from './print-fire-cover-note';

describe('PrintFireCoverNote', () => {
  let component: PrintFireCoverNote;
  let fixture: ComponentFixture<PrintFireCoverNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFireCoverNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintFireCoverNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
