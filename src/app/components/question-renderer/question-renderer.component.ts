import { Component, Input } from "@angular/core";
import { Question } from "../../models/question.model";
import { DoubleMatrixComponent } from "../double-matrix/double-matrix.component";
import { FreeResponseComponent } from "../free-response/free-response.component";
import { LinearScaleComponent } from "../linear-scale/linear-scale.component";
import { MainQuestionComponent } from "../main-question/main-question.component";
import { MultipleChoiceComponent } from "../multiple-choice/multiple-choice.component";
import { SimpleMatrixComponent } from "../simple-matrix/simple-matrix.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-question-renderer',
  standalone: true,
  imports: [
    CommonModule,
    MultipleChoiceComponent,
    SimpleMatrixComponent,
    DoubleMatrixComponent,
    LinearScaleComponent,
    FreeResponseComponent,
    MainQuestionComponent,
   
  ],
  template: `
    <ng-container [ngSwitch]="question.type">
      <app-multiple-choice *ngSwitchCase="'multiple-choice'" [question]="question"></app-multiple-choice>
      <app-simple-matrix *ngSwitchCase="'simple-matrix'" [question]="question"></app-simple-matrix>
      <app-double-matrix *ngSwitchCase="'double-matrix'" [question]="question"></app-double-matrix>
      <app-linear-scale *ngSwitchCase="'linear-scale'" [question]="question"></app-linear-scale>
      <app-free-response *ngSwitchCase="'free-response'" [question]="question"></app-free-response>
      <p *ngSwitchDefault>Unknown question type</p>
    </ng-container>
  `,

})
export class QuestionRendererComponent {
  @Input() question!: Question;
}