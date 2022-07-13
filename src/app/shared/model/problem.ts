import { ProblemDatail } from "./problemDatail";

export interface Problem {
  title: string;
  detail: string;
  userMessage: string;
  objects: ProblemDatail[];

}
