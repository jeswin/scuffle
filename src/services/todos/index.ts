import { Todo } from "../../types";
import * as data from "./dummyTodos";

// Temporarily store this in mem.
// This stuff is gonna go into filesystem/git
let todos: Todo[] = data.todos;

let completedTodos: Todo[] = [];

export async function getAllTodos(): Promise<Todo[]> {
  return [...todos];
}

export async function saveTodo(todo: Todo): Promise<void> {
  todos = todos.concat(todo);
}

export async function completeTodo(todo: Todo): Promise<void> {
  completedTodos = completedTodos.concat(todo);
  todos = todos.filter((x) => x.id !== todo.id);
}

export async function getItemsByTags(tags: string[]): Promise<Todo[]> {
  return todos.filter(
    (b) => b.tags && b.tags.some((tag) => tags.includes(tag))
  );
}
