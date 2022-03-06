import { Component, OnInit } from '@angular/core';
import { IInstagramMedia } from 'src/app/models/instagram-media.model';
import { InstagramService } from 'src/app/services/instagram/instagram.service';

@Component({
	selector: 'app-galerie',
	templateUrl: './galerie.component.html',
	styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent implements OnInit {
	public gallerie: IInstagramMedia[] = [];
	public loading: boolean = true;
	public placeholderNumber: number = 9;

	constructor(private instagramService: InstagramService) {}

	ngOnInit(): void {
		this.instagramService.getFeed().then((result) => {
			this.gallerie = result;
			this.loading = false;
		});
	}
}
