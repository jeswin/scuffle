import { defineState } from "forgo-state";
import { Todo } from "../types";

export interface IState {
  todos: Todo[];
  completedTodos: Todo[];
}

export const state: IState = defineState({ todos: [], completedTodos: [] });

export default state;