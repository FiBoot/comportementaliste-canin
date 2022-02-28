import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class MailService {
	constructor(private http: HttpClient) {}

	public sendFormContactMail(form: FormGroup): Promise<boolean> {
    return new Promise(res => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
		const body = JSON.stringify(form.value);
		console.log(`Sending to ${environment.emailEndpoint}: ${body}`);
		return new Promise((resolve, reject) => {
			this.http.post(environment.emailEndpoint, body).subscribe((response) => {
				console.warn(response);
				resolve(true);
			});
		});
	}
}
