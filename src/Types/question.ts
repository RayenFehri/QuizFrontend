import { Answer } from "./answer.type";

export interface question{
    id_quiz:string;
    question_content:string;
    explantation: string ;
    questiontype:string;
    answers: Answer[]; 
}

