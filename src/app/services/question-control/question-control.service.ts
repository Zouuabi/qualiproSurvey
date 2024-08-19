import { Injectable } from '@angular/core';
import { Question } from '../../models/question.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: Question[]) {
    const group: any = {};
    questions.forEach(question => {
      
      group[question.id] = question.required ? new FormControl('',Validators.required): new FormControl('');
    });
    return new FormGroup(group);
  }
}
