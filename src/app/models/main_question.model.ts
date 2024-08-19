import { Question } from "./question.model";

export class MainQuestion extends Question {
    /// represents the nested question  [Question]
    questions: Question[];

    constructor(id: string, value :string ,order: number, type: string, required: boolean,
        options: { key: string, value: string }[], questions: Question[]) {
        super(id, value ,order, type, required, options);
        this.questions = questions;
    }
}