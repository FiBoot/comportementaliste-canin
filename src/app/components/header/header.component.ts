import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public routes = [
		{ path: 'a-propos', name: 'A propos', active: false },
		{ path: 'tarifs', name: 'Prestations et service', active: false },
		{ path: 'galerie', name: 'Galerie', active: false },
		{ path: 'contact', name: 'Contact', active: false },
	];
	private currentPath: string = '';

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.currentPath = event.url.slice(1, event.url.length);
			}
		});
	}
	public isActive(path: string): boolean {
		return path === this.currentPath;
	}
}
