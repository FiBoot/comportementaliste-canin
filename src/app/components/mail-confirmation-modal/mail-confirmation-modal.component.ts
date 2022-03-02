import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-mail-confirmation-modal',
	templateUrl: './mail-confirmation-modal.component.html',
	styleUrls: ['./mail-confirmation-modal.component.scss'],
})
export class MailConfirmationModalComponent {
	constructor(public modalRef: BsModalRef) {}
}
