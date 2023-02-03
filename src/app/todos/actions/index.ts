import { Todo } from "../../../types/index.js";
import * as todosService from "../../../services/todos/index.js";
import randomId from "../../../lib/randomId.js";
import state from "../state.js";

export async function loadTodos(): Promise<void> {
  const tasks = await todosService.getAllTodos();
  state.todos = tasks;
}

export async function addTodo(
  title: string,
  description: string | undefined
): Promise<void> {
  const todo = {
    id: randomId(),
    type: "todo" as "todo",
    title,
    description,
    createdAt: Date.now(),
  };

  await todosService.saveTodo(todo);
  state.todos = state.todos.concat(todo);
}

export async function completeTodo(todo: Todo): Promise<void> {
  await todosService.completeTodo(todo);
  state.todos = state.todos.filter((x) => x.id !== todo.id);
  state.completedTodos = state.completedTodos.concat(todo);
}
