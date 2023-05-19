import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DonneesAccadeComponent } from './inscription/donnees-accade/donnees-accade.component';
import { DonneesPersoComponent } from './inscription/donnees-perso/donnees-perso.component';
import { PlusInfoComponent } from './inscription/plus-info/plus-info.component';

const routes: Routes = [
  {path:'inscription',component:InscriptionComponent},
  {path:'',component:FormulaireComponent},
  {path:'DonneesAccadem',component:DonneesAccadeComponent},
  {path:'Donneespre',component:DonneesPersoComponent},
  {path:'plusInfo',component:PlusInfoComponent},
  {path:'formulaire',component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
