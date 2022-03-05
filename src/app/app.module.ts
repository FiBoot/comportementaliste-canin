import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailService } from './services/mail/mail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParallaxModule } from 'ngx-parallax';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarifCardComponent } from './components/tarif-card/tarif-card.component';
import { InstagramService } from './services/instagram/instagram.service';
import { MailConfirmationModalComponent } from './components/mail-confirmation-modal/mail-confirmation-modal.component';
import { MailErrorModalComponent } from './components/mail-error-modal/mail-error-modal.component';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AProposComponent,
		TarifsComponent,
		GalerieComponent,
		ContactComponent,
		CgvComponent,
		HeaderComponent,
		FooterComponent,
		TarifCardComponent,
		MailConfirmationModalComponent,
		MailErrorModalComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ModalModule.forRoot(),
		ReactiveFormsModule,
		ParallaxModule,
		NgxCaptchaModule,
		// anti autoformat line
	],
	providers: [
		HttpClient,
		MailService,
		InstagramService,
		// anti autoformat line
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
