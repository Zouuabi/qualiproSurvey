import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../../models/question.model';
import { MultipleChoiceComponent } from "../multiple-choice/multiple-choice.component";
import { SimpleMatrixComponent } from "../simple-matrix/simple-matrix.component";
import { DoubleMatrixComponent } from "../double-matrix/double-matrix.component";
import { LinearScaleComponent } from "../linear-scale/linear-scale.component";
import { FreeResponseComponent } from "../free-response/free-response.component";
import { MainQuestion } from '../../models/main_question.model';

@Component({
  selector: 'app-main-question',
  standalone: true,
  imports: [ReactiveFormsModule, MultipleChoiceComponent, SimpleMatrixComponent, DoubleMatrixComponent, LinearScaleComponent, FreeResponseComponent],
  templateUrl: './main-question.component.html',
  styleUrls: ['./main-question.component.css'] // Corrected to styleUrls
})
export class MainQuestionComponent {
  @Input() question!: Question;
  @Input() controller!: FormControl<boolean | null>;
}
