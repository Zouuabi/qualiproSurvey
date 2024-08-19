export class Question {

    id: string;

    value :string ;
    /// the index of the question within the survey questions
    order: number;
    /// the type of the question ex:double-matrix | main-question ... 
    type: string;
    required: boolean;
    /// in case of matrix or multi response question 
    /// there should be options to choose from 
    options: { key: string, value: string }[] | undefined;
    nestedQuestions : Question[] |undefined ;

    constructor(id: string,value : string, order: number, type: string, required: boolean, options: { key: string, value: string }[],nestedQuestions:Question[] =[] ) {
        this.id = id || "";
        this.value = value;
        this.order = order;
        this.type = type;
        this.required = required;
        this.options = options;
        this.nestedQuestions = nestedQuestions ;
    }
}


export enum QuestionType {
    MultipleChoice = 'multiple-choice',
    SimpleMatrix = 'simple-matrix',
    DoubleMatrix = 'double-matrix',
    LinearScale = 'linear-scale',
    FreeResponse = 'free-response',
    MainQuestion = 'main-question'
}
