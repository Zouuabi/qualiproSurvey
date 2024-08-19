import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-linear-scale',
  standalone: true,
  imports: [],
  templateUrl: './linear-scale.component.html',
  styleUrl: './linear-scale.component.css'
})
export class LinearScaleComponent {
  @Input() question! : Question ;
}
