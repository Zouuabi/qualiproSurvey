import { Injectable } from '@angular/core';
import { Question } from '../../models/question.model';
import { MainQuestion } from '../../models/main_question.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  fetchQuestions() : Question[] {
    return  [
      new Question('q1', 'Select one or more ', 1, 'multiple-choice', true, [
        { key: 'a', value: 'Option A' },
        { key: 'b', value: 'Option B' },
        { key: 'c', value: 'Option C' }
      ]),
      new Question('q2', 'How satisfied are you with ...?', 2, 'simple-matrix', false, [
        { key: '1', value: 'Strongly Disagree' },
        { key: '2', value: 'Disagree' },
        { key: '3', value: 'Neutral' },
        { key: '4', value: 'Agree' },
        { key: '5', value: 'Strongly Agree' }
      ]),
      new Question('q3', 'Do you agree with the following statements?', 3, 'double-matrix', true, [
        { key: 'yes', value: 'Yes' },
        { key: 'no', value: 'No' }
      ]),
      new Question('q4', 'Rate your experience so far', 4, 'linear-scale', true, [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' }
      ]),
      new Question('q5', 'Please provide any additional comments.', 5, 'free-response', false, []),
      new Question('q6', 'Show hidden Questions', 6, 'main-question', true, [
        { key: 'yes', value: 'Yes' },
        { key: 'no', value: 'No' }
      ],
      /// list of nested questions
      [new Question('q1', 'Select one or more ', 1, 'multiple-choice', true, [
        { key: 'a', value: 'Option A' },
        { key: 'b', value: 'Option B' },
        { key: 'c', value: 'Option C' }
      ]),
      new Question('q2', 'How satisfied are you with ...?', 2, 'simple-matrix', false, [
        { key: '1', value: 'Strongly Disagree' },
        { key: '2', value: 'Disagree' },
        { key: '3', value: 'Neutral' },
        { key: '4', value: 'Agree' },
        { key: '5', value: 'Strongly Agree' }
      ]),
      new Question('q3', 'Do you agree with the following statements?', 3, 'double-matrix', true, [
        { key: 'yes', value: 'Yes' },
        { key: 'no', value: 'No' }
      ]),
      new Question('q4', 'Rate your experience so far', 4, 'linear-scale', true, [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' }
      ]),
      new Question('q5', 'Please provide any additional comments.', 5, 'free-response', false, []),]
    )
    ];
  }
}
