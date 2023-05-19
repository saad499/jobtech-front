import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donnees-perso',
  templateUrl: './donnees-perso.component.html',
  styleUrls: ['./donnees-perso.component.css']
})
export class DonneesPersoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router){}

  donneePersoFromGroup!:FormGroup;

  isFieldEnabled: boolean = true;

  toggleFieldEnabled() {
    this.isFieldEnabled = !this.isFieldEnabled;
  }

  ngOnInit(): void {
    this.donneePersoFromGroup = this.formBuilder.group({
      prenom:this.formBuilder.control("",[Validators.required]),
      nom:this.formBuilder.control("",[Validators.required]),
      dateNaissance:this.formBuilder.control("",[Validators.required]),
      email:this.formBuilder.control("",[Validators.required, Validators.email]),
      genre:this.formBuilder.control("",[Validators.required]),
      telephone:this.formBuilder.control("",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      adresse:this.formBuilder.control("",[Validators.required])
    })
  }
  submitForm() {
    // Code pour traiter les données du formulaire
  }

  donneesAcademique(){
    this.router.navigateByUrl('/DonneesAccadem');
  }

  /*
  prenom, nom, dateNaissance,
  email, genre, telephone,
  adresse
  */

}
