import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-free-response',
  standalone: true,
  imports: [],
  templateUrl: './free-response.component.html',
  styleUrl: './free-response.component.css'
})
export class FreeResponseComponent {
  @Input() question! : Question ;
}
