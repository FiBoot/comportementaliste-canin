import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { HomeComponent } from './pages/home/home.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'a-propos', component: AProposComponent },
	{ path: 'tarifs', component: TarifsComponent },
	{ path: 'galerie', component: GalerieComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'cgv', component: CgvComponent },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
