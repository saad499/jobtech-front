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
  donneeAccadFromGroup!:FormGroup;
  plusInfoFromGroup!:FormGroup;
  isButtonDisabled: boolean = true;

  isFieldEnabled: boolean = true;

  options = ['option 1', 'option 2'];
  autreOption:string='';

  choixnbrExpr:string='';
  texteSaisinbrExpr:string='';

  toggleFieldEnabled() {
    this.isFieldEnabled = !this.isFieldEnabled;
  }

  ngOnInit(): void {
    this.donneePersoFromGroup = this.formBuilder.group({
      prenom:this.formBuilder.control("",[Validators.required]),
      nom:this.formBuilder.control("",[Validators.required]),
      age:this.formBuilder.control("",[Validators.required]),
      genre:this.formBuilder.control("",[Validators.required]),
      email:this.formBuilder.control("",[Validators.required, Validators.email]),
      telephone:this.formBuilder.control("",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      ville:this.formBuilder.control("",[Validators.required]),
      choixVille:this.formBuilder.control("",[Validators.required])
    });

    this.donneeAccadFromGroup = this.formBuilder.group({
      Niveau_academic    :this.formBuilder.control("",[Validators.required]),
      filiere_academic   :this.formBuilder.control("",[Validators.required]),
      etablissement_freq :this.formBuilder.control("",[Validators.required]),
      annee_diplome      :this.formBuilder.control("",[Validators.required]),
      experience_pro     :this.formBuilder.control("",[Validators.required]),
      situation          :this.formBuilder.control("",[Validators.required]),
      cherche_emploi     :this.formBuilder.control("",[Validators.required]),
    });

    this.plusInfoFromGroup = this.formBuilder.group({
      Choix_formation    :this.formBuilder.control("",[Validators.required]),
      financement        :this.formBuilder.control("",[Validators.required]),
      ordinateur_portable:this.formBuilder.control("",[Validators.required]),
      requis_coding      :this.formBuilder.control("",[Validators.required]),
      auto_formation     :this.formBuilder.control("",[Validators.required]),
      referents          :this.formBuilder.control("",[Validators.required]),
      francais           :this.formBuilder.control("",[Validators.required]),
      anglais            :this.formBuilder.control("",[Validators.required]),
      autodidacte        :this.formBuilder.control("",[Validators.required]),
      condition          :this.formBuilder.control("",[Validators.required]),
    });

    this.donneePersoFromGroup.valueChanges.subscribe(() => {
      this.updateButtonState();
    });

    this.donneeAccadFromGroup.valueChanges.subscribe(() => {
      this.updateButtonState();
    });

    this.plusInfoFromGroup.valueChanges.subscribe(() => {
      this.updateButtonState();
    });
  }
  updateButtonState(): void {
    this.isButtonDisabled = !(this.donneePersoFromGroup.valid && this.donneeAccadFromGroup.valid && this.plusInfoFromGroup.valid);
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

document.addEventListener('DOMContentLoaded', () => {
  const previousButton = document.getElementById('previousButton') as HTMLButtonElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
const tabContent = document.getElementById('pills-tabContent') as HTMLElement;

previousButton.addEventListener('click', () => {
  const activeTab = tabContent.querySelector('.tab-pane.fade.show.active') as HTMLElement;
  const previousTab = activeTab.previousElementSibling as HTMLElement;
  if (previousTab) {
    const activeTabButton = document.querySelector(`[data-bs-target="#${activeTab.id}"]`) as HTMLElement;
    const previousTabButton = activeTabButton.parentElement?.previousElementSibling?.querySelector('.nav-link') as HTMLElement;
    activeTab.classList.remove('show', 'active');
    activeTabButton.classList.remove('active');
    previousTab.classList.add('show', 'active');
    previousTabButton.classList.add('active');
  }
});

nextButton.addEventListener('click', () => {
  const activeTab = tabContent.querySelector('.tab-pane.fade.show.active') as HTMLElement;
  const nextTab = activeTab.nextElementSibling as HTMLElement;
  if (nextTab) {
    const activeTabButton = document.querySelector(`[data-bs-target="#${activeTab.id}"]`) as HTMLElement;
    const nextTabButton = activeTabButton.parentElement?.nextElementSibling?.querySelector('.nav-link') as HTMLElement;
    activeTab.classList.remove('show', 'active');
    activeTabButton.classList.remove('active');
    nextTab.classList.add('show', 'active');
    nextTabButton.classList.add('active');
  }
});
});







