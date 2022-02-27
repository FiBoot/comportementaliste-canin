import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public routes = [
		{ path: '', name: 'Home', active: false },
		{ path: 'a-propos', name: 'A propos', active: false },
		{ path: 'diplomes', name: 'Diplomes', active: false },
		{ path: 'tarifs', name: 'Tarifs', active: false },
		{ path: 'galerie', name: 'Galerie', active: false },
		{ path: 'contact', name: 'Contact', active: false },
		{ path: 'cgv', name: 'CGV', active: false },
	];

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				const path = event.url.slice(1, event.url.length);
				for (let route of this.routes) {
					route.active = route.path === path
				}
			}
		});
	}
}
