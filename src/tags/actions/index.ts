import state from "../state";
import * as tagsService from "../../services/tags";

export async function loadTaggedItems(tags: string[]): Promise<void> {
  const items = await tagsService.getItemsByTags(tags);
  state.bookmarks = items.bookmarks;
  state.notes = items.notes;
  state.todos = items.todos;
}