import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DoubleMatrixComponent } from '../../components/double-matrix/double-matrix.component';
import { FreeResponseComponent } from '../../components/free-response/free-response.component';
import { LinearScaleComponent } from '../../components/linear-scale/linear-scale.component';
import { MainQuestionComponent } from '../../components/main-question/main-question.component';
import { MultipleChoiceComponent } from '../../components/multiple-choice/multiple-choice.component';
import { SimpleMatrixComponent } from '../../components/simple-matrix/simple-matrix.component';
import { Question } from '../../models/question.model';
import { QuestionControlService } from '../../services/question-control/question-control.service';
import { SurveyService } from '../../services/survey/survey.service';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultipleChoiceComponent,
    SimpleMatrixComponent,
    DoubleMatrixComponent,
    LinearScaleComponent,
    FreeResponseComponent,
    MainQuestionComponent,
  ],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'] // Corrected to styleUrls
})
export class SurveyComponent implements OnInit {
  questions!: Question[];
  survey!: FormGroup;

  constructor(
    private surveyService: SurveyService,
    private questionControlService: QuestionControlService
  ) {}

  ngOnInit(): void {
    this.questions = this.surveyService.fetchQuestions();
    this.survey = this.questionControlService.toFormGroup(this.questions);
  }

  getFormControl(questionId: string): FormControl  {
    return this.survey.get(questionId) as FormControl;
  }

  trackByQuestionId(index: number, question: Question): string {
    return question.id;
  }

  onSubmit() {
    const payload = JSON.stringify(this.survey.getRawValue());
    
  }
}
