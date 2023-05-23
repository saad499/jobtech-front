import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donnees-accade',
  templateUrl: './donnees-accade.component.html',
  styleUrls: ['./donnees-accade.component.css']
})
export class DonneesAccadeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router){}

  donneeAcadFromGroup!:FormGroup;

  isFieldEnabled: boolean = true;

  toggleFieldEnabled() {
    this.isFieldEnabled = !this.isFieldEnabled;
  }

  ngOnInit(): void {
    this.donneeAcadFromGroup = this.formBuilder.group({
      niveauAcademique:this.formBuilder.control("",[Validators.required]),
      filiereAcademique:this.formBuilder.control("",[Validators.required]),
      etablissement:this.formBuilder.control("",[Validators.required]),
      experiencePro:this.formBuilder.control("",[Validators.required]),
      situation:this.formBuilder.control("",[Validators.required]),
      diplome:this.formBuilder.control("",[Validators.required]),
      chercherEmploi:this.formBuilder.control("",[Validators.required]),
      inscriAnapec:this.formBuilder.control("",[Validators.required]),
    })
  }
  submitForm() {
    // Code pour traiter les données du formulaire
  }

  donneesAcademique(){
    this.router.navigateByUrl('/DonneesAccadem');
  }

  plusInfo(){
    this.router.navigateByUrl('/plusInfo');
  }

  /*
  prenom, nom, dateNaissance,
  email, genre, telephone,
  adresse
  */

}
