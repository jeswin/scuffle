import state from "../state";
import * as tagsService from "../../../services/tags";
import * as todosService from "../../../services/todos";
import { Todo } from "../../../types";

export async function loadTaggedItems(tags: string[]): Promise<void> {
  const items = await tagsService.getItemsByTags(tags);
  state.bookmarks = items.bookmarks;
  state.notes = items.notes;
  state.todos = items.todos;
}

export async function completeTodo(todo: Todo): Promise<void> {
  await todosService.completeTodo(todo);
  state.todos = state.todos.filter((x) => x.id !== todo.id);
}
