import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public routeList = [
		{ path: '', name: 'Home', active: false },
		{ path: 'a-propos', name: 'A propos', active: false },
		{ path: 'diplomes', name: 'Diplomes', active: false },
		{ path: 'tarifs', name: 'Tarifs', active: false },
		{ path: 'galerie', name: 'Galerie', active: false },
		{ path: 'contact', name: 'Contact', active: false },
		{ path: 'cgv', name: 'CGV', active: false },
	];

	ngOnInit(): void {
		const currentPath = window.location.pathname.slice(1, window.location.pathname.length);
		for (let route of this.routeList) {
			if (route.path === currentPath) {
        route.active = true;
			}
		}
	}
}
