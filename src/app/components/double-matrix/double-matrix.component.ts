import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-double-matrix',
  standalone: true,
  imports: [],
  templateUrl: './double-matrix.component.html',
  styleUrl: './double-matrix.component.css'
})
export class DoubleMatrixComponent {
  @Input() question! : Question ;
  @Input() control! : FormControl;

}
