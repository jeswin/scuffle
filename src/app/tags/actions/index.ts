import state from "../state.js";
import * as tagsService from "../../../services/tags/index.js";
import * as todosService from "../../../services/todos/index.js";
import { Todo } from "../../../types/index.js";

export async function loadTaggedItems(tags: string[]): Promise<void> {
  state.tags = tags;
  state.bookmarks = [];
  state.notes = [];
  state.todos = [];
  const items = await tagsService.getItemsByTags(tags);
  state.bookmarks = items.bookmarks;
  state.notes = items.notes;
  state.todos = items.todos;
}

export async function completeTodo(todo: Todo): Promise<void> {
  await todosService.completeTodo(todo);
  state.todos = state.todos.filter((x) => x.id !== todo.id);
}
