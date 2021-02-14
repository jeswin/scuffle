import { Todo } from "../../types";
import * as todosService from "../../services/todos";
import randomId from "../../lib/randomId";
import state from "../state";

export async function loadTodos(): Promise<void> {
  const tasks = await todosService.getAllTodos();
  state.tasks = tasks;
}

export async function addTodo(
  title: string,
  description: string | undefined
): Promise<void> {
  const todo = {
    id: randomId(),
    title,
    description,
    createdAt: Date.now(),
  };

  await todosService.saveTodo(todo);
  state.tasks = state.tasks.concat(todo);
}

export async function completeTodo(todo: Todo): Promise<void> {
  await todosService.completeTodo(todo);
  state.tasks = state.tasks.filter((x) => x.id !== todo.id);
  state.completedTodos = state.completedTodos.concat(todo);
}
