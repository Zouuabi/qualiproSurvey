import { Component } from '@angular/core';
import { MultipleChoiceComponent } from "../multiple-choice/multiple-choice.component";
import { SimpleMatrixComponent } from "../simple-matrix/simple-matrix.component";
import { DoubleMatrixComponent } from "../double-matrix/double-matrix.component";
import { LinearScaleComponent } from "../linear-scale/linear-scale.component";
import { FreeResponseComponent } from "../free-response/free-response.component";

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [MultipleChoiceComponent, SimpleMatrixComponent, DoubleMatrixComponent, LinearScaleComponent, FreeResponseComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {

}
