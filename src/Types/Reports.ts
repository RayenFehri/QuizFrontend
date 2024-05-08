import { UUID } from "crypto";

export interface Reports{
    statusColor: any;
    idreport:string;
    quizid:UUID;
    userid:UUID;
    totalscore:number;
    startingdate:string;
    endingdate:string;
    note:string;
    email:string;
    groupid:UUID;
    statut:string;
    quizName: string; 

}