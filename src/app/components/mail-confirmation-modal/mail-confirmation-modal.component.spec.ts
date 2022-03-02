import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailConfirmationModalComponent } from './mail-confirmation-modal.component';

describe('MailConfirmationModalComponent', () => {
  let component: MailConfirmationModalComponent;
  let fixture: ComponentFixture<MailConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailConfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
