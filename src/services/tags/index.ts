import { Bookmark, Note, TagInfo, Todo } from "../../types";
import * as todosService from "../todos";
import * as bookmarksService from "../bookmarks";
import * as notesService from "../notes";
import { tags } from "./dummyTags";

export async function getAllTags(): Promise<TagInfo[]> {
  return [...tags];
}

export async function getItemsByTags(
  tags: string[]
): Promise<{
  bookmarks: Bookmark[];
  notes: Note[];
  tasks: Todo[];
}> {
  return {
    bookmarks: await bookmarksService.getItemsByTags(tags),
    notes: await notesService.getItemsByTags(tags),
    tasks: await todosService.getItemsByTags(tags),
  };
}
