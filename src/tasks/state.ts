import { defineState } from "forgo-state";
import { Task } from "../types";

export interface IState {
  tasks: Task[];
  completedTasks: Task[];
}

export const state: IState = defineState({ tasks: [], completedTasks: [] });

export default state;