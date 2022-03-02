import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailErrorModalComponent } from './mail-error-modal.component';

describe('MailErrorModalComponent', () => {
  let component: MailErrorModalComponent;
  let fixture: ComponentFixture<MailErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
