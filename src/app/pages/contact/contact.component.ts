import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	public contactForm = new FormGroup({
		lastname: new FormControl('', Validators.required),
		firstname: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.email, Validators.required]),
		dogbread: new FormControl('', Validators.required),
		dogage: new FormControl(0, [Validators.min(1), Validators.required]),
		address: new FormControl('', Validators.required),
		zipcode: new FormControl(0, [Validators.min(1), Validators.required]),
		city: new FormControl('', Validators.required),
		phonenumber: new FormControl('', [Validators.pattern(/^\+?(\d{2}){5}$/), Validators.required]),
		message: new FormControl(''),
		haschild: new FormControl(false),
		hashandicap: new FormControl(false),
	});
	private formTouched: boolean = false;

	public isControlValid(controlName: string): boolean {
		const touched = this.contactForm.controls[controlName].touched || this.formTouched;
		const errors = this.contactForm.controls[controlName].errors ? true : false
		return touched && errors;
	}

	public onSubmit(form: FormGroup): void {
		this.formTouched = true;
		if (this.contactForm.valid) {
			console.warn('OK')
		}
		console.log(form);
	}
}
