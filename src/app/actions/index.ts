import state from "../state";
import * as bookmarksService from "../../services/bookmarks/index.js";
import * as notesService from "../../services/notes/index.js";
import * as todosService from "../../services/todos/index.js";
import * as profileService from "../../services/profile/index.js";
import { Todo } from "../../types/index.js";

export async function loadProfile(): Promise<void> {
  state.profile = await profileService.loadProfile();
}

export async function loadHomePageData(): Promise<void> {
  const [bookmarks, notes, todos] = await Promise.all([
    bookmarksService.getAllBookmarks(),
    notesService.getAllNotes(),
    todosService.getAllTodos(),
  ]);
  state.bookmarks = bookmarks;
  state.notes = notes;
  state.todos = todos;
}

export async function completeTodo(todo: Todo): Promise<void> {
  await todosService.completeTodo(todo);
  state.todos = state.todos.filter((x) => x.id !== todo.id);
}
