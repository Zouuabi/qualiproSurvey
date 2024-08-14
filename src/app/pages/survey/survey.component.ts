import { Component } from '@angular/core';
import { MultipleChoiceComponent } from "../multiple-choice/multiple-choice.component";
import { SimpleMatrixComponent } from "../simple-matrix/simple-matrix.component";
import { DoubleMatrixComponent } from "../double-matrix/double-matrix.component";
import { LinearScaleComponent } from "../linear-scale/linear-scale.component";
import { FreeResponseComponent } from "../free-response/free-response.component";
import { MainQuestionComponent } from "../main-question/main-question.component";
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ReactiveFormsModule ,MultipleChoiceComponent, SimpleMatrixComponent, DoubleMatrixComponent, LinearScaleComponent, FreeResponseComponent, MainQuestionComponent,],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {


  survey = new FormGroup({ 
    name : new FormControl<boolean | null>(null,Validators.required),
    lastName : new FormControl<string>('')
    
  });


  get nameControl(): FormControl<boolean | null> {
    return this.survey.get('name') as FormControl<boolean | null>;
  }


  onSubmit() {
    
    

  }
  
}
