import { defineState } from "forgo-state";
import { Todo } from "../../types/index.js";

export interface IState {
  todos: Todo[];
  completedTodos: Todo[];
}

export const state: IState = defineState({ todos: [], completedTodos: [] });

export default state;