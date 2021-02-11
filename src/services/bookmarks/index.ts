import { Bookmark, Bookmark as bookmarksService } from "../../types";
import * as data from "./dummyBookmarks";

let bookmarks = data.bookmarks;

export async function getAllBookmarks(): Promise<Bookmark[]> {
  return [...bookmarks];
}

export async function getItemsByTags(
  tags: string[]
): Promise<bookmarksService[]> {
  return bookmarks.filter(
    (b) => b.tags && b.tags.some((tag) => tags.includes(tag))
  );
}

export async function addBookmark(bookmark: Bookmark): Promise<Bookmark[]> {
  bookmarks = bookmarks.concat(bookmark);
  return bookmarks;
}

export async function updateBookmark(bookmark: Bookmark): Promise<void> {
  bookmarks = bookmarks.map((existing) =>
    existing.id === bookmark.id ? { ...bookmark } : existing
  );
}

export async function deleteBookmark(id: string): Promise<void> {
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
}
