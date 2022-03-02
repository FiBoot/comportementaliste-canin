import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail/mail.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MailConfirmationModalComponent } from 'src/app/components/mail-confirmation-modal/mail-confirmation-modal.component';
import { MailErrorModalComponent } from 'src/app/components/mail-error-modal/mail-error-modal.component';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	private formTouched: boolean = false;
	private modalRef: BsModalRef | undefined;

	public contactForm = new FormGroup({
		lastname: new FormControl('', Validators.required),
		firstname: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.email, Validators.required]),
		dog_bread: new FormControl('', Validators.required),
		dog_age: new FormControl(0, [Validators.min(1), Validators.required]),
		address: new FormControl('', Validators.required),
		zipcode: new FormControl('', [Validators.min(1), Validators.required]),
		city: new FormControl('', Validators.required),
		phone_number: new FormControl('', [Validators.pattern(/^\+?(\d{2} ?){5}$/), Validators.required]),
		message: new FormControl('', Validators.required),
		emergency: new FormControl(false),
	});
	public sendingForm: boolean = false;

	constructor(private mailService: MailService, private modalService: BsModalService) {}

	openModal(success: boolean) {
		this.modalRef = this.modalService.show(success ? MailConfirmationModalComponent : MailErrorModalComponent);
	}

	public isControlValid(controlName: string): boolean {
		const touched = this.contactForm.controls[controlName].touched || this.formTouched;
		const errors = this.contactForm.controls[controlName].errors ? true : false;
		return touched && errors;
	}

	public onSubmit(form: FormGroup): void {
		this.formTouched = true;
		if (form.valid) {
			this.sendingForm = true;
			this.mailService.sendFormContactMail(form).then((response) => {
				this.sendingForm = false;
				this.openModal(response);
			});
		}
	}
}
