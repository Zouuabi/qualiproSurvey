import { Component, Input } from '@angular/core';
import {FormControl ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-question.component.html',
  styleUrl: './main-question.component.css'
})
export class MainQuestionComponent {

  @Input() controller!: FormControl<boolean|null>;

  

}
