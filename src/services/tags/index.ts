import { Bookmark, Note, TagInfo, Todo } from "../../types/index.js";
import * as todosService from "../todos/index.js";
import * as bookmarksService from "../bookmarks/index.js";
import * as notesService from "../notes/index.js";
import { tags } from "./dummyTags.js";

export async function getAllTags(): Promise<TagInfo[]> {
  return [...tags];
}

export async function getItemsByTags(
  tags: string[]
): Promise<{
  bookmarks: Bookmark[];
  notes: Note[];
  todos: Todo[];
}> {
  return {
    bookmarks: await bookmarksService.getItemsByTags(tags),
    notes: await notesService.getItemsByTags(tags),
    todos: await todosService.getItemsByTags(tags),
  };
}
