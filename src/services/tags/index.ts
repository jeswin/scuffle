import { Bookmark, Note, TagInfo, Task } from "../../types";
import * as tasksService from "../tasks";
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
  tasks: Task[];
}> {
  return {
    bookmarks: await bookmarksService.getItemsByTags(tags),
    notes: await notesService.getItemsByTags(tags),
    tasks: await tasksService.getItemsByTags(tags),
  };
}
