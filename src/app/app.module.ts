import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
