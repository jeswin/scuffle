import { getAllTags } from "../services/tags";
import state from "../state";
import * as bookmarksService from "../services/bookmarks";
import * as notesService from "../services/notes";
import * as todosService from "../services/todos";

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