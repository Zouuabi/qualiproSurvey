import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.css'
})
export class MultipleChoiceComponent {
  @Input() question! : Question ;
}
