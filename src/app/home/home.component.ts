import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English","Spanish"];
  model = new Employee('Dala','Smith',true,"w2","spanish");
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster){

  }
  validatePrimaryLanguage(value){
    if (value === "default")
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
    console.log("lang: " + value);
  }

  submitForm(form: NgForm){
    this.formPoster.postEmployeeForm(this.model);
  }
}
