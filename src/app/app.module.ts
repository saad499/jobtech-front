import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './inscription/navbar/navbar.component';
import { DonneesPersoComponent } from './inscription/donnees-perso/donnees-perso.component';
import { DonneesAccadeComponent } from './inscription/donnees-accade/donnees-accade.component';
import { PlusInfoComponent } from './inscription/plus-info/plus-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    InscriptionComponent,
    NavbarComponent,
    DonneesPersoComponent,
    DonneesAccadeComponent,
    PlusInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
