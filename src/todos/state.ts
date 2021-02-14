import { defineState } from "forgo-state";
import { Todo } from "../types";

export interface IState {
  tasks: Todo[];
  completedTodos: Todo[];
}

export const state: IState = defineState({ tasks: [], completedTodos: [] });

export default state;