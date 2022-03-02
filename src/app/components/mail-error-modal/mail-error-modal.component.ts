import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-mail-error-modal',
	templateUrl: './mail-error-modal.component.html',
	styleUrls: ['./mail-error-modal.component.scss'],
})
export class MailErrorModalComponent {
	constructor(public modalRef: BsModalRef) {}
}
