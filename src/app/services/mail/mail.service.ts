import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class MailService {
	constructor(private http: HttpClient) {}

	public sendFormContactMail(form: FormGroup): Promise<boolean> {
		const body = JSON.stringify(form.value);
		console.log(body)
		return new Promise((resolve) =>
			this.http.post(environment.emailEndpoint, body).subscribe({
				error: (err: Error) => {
					console.log('[MailService] Error: ' + err.message);
					resolve(false);
				},
				complete: () => resolve(true),
			})
		);
	}
}
