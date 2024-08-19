import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-simple-matrix',
  standalone: true,
  imports: [],
  templateUrl: './simple-matrix.component.html',
  styleUrl: './simple-matrix.component.css'
})
export class SimpleMatrixComponent {
  @Input() question! : Question ;

}
