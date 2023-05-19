import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-info',
  templateUrl: './plus-info.component.html',
  styleUrls: ['./plus-info.component.css']
})
export class PlusInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router){}

  plusInfoFromGroup!:FormGroup;

  isFieldEnabled: boolean = true;

  toggleFieldEnabled() {
    this.isFieldEnabled = !this.isFieldEnabled;
  }

  ngOnInit(): void {
    this.plusInfoFromGroup = this.formBuilder.group({
      disponible:this.formBuilder.control("",[Validators.required]),
      financement:this.formBuilder.control("",[Validators.required]),
      ordinateurPortaban:this.formBuilder.control("",[Validators.required]),
      langueFrancais:this.formBuilder.control("",[Validators.required]),
      langueAnglais:this.formBuilder.control("",[Validators.required]),
      preRequisCoding:this.formBuilder.control("",[Validators.required]),
      autodidacte:this.formBuilder.control("",[Validators.required]),
      referents:this.formBuilder.control("",[Validators.required]),
      commentaire:this.formBuilder.control(""),
      validCondition:this.formBuilder.control("",[Validators.required]),
    })
  }

}
