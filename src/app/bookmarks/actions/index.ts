import state from "../state.js";
import * as bookmarksService from "../../../services/bookmarks/index.js";
import randomId from "../../../lib/randomId.js";

export async function loadBookmarks(): Promise<void> {
  const bookmarks = await bookmarksService.getAllBookmarks();
  state.bookmarks = bookmarks;
}

export async function addBookmark(url: string, title: string): Promise<void> {
  const bookmark = {
    id: randomId(),
    type: "bookmark" as "bookmark",
    url,
    title,
    createdAt: Date.now(),
  };
  await bookmarksService.addBookmark(bookmark);
  state.bookmarks = state.bookmarks.concat(bookmark);
}

export async function updateBookmark(
  id: string,
  url: string,
  title: string | undefined
): Promise<void> {
  const bookmark = {
    id,
    type: "bookmark" as "bookmark",
    url,
    title,
    createdAt: Date.now(),
  };

  await bookmarksService.updateBookmark(bookmark);

  const newBookMarks = state.bookmarks.map((bookmark) => {
    if (bookmark.id === id) {
      return Object.assign({}, { ...bookmark, title, url }, { valid: true });
    } else {
      return bookmark;
    }
  });

  state.bookmarks = newBookMarks;
}

export async function deleteBookmark(
  selectedBookmarkId: string
): Promise<void> {
  state.bookmarks = state.bookmarks.filter(
    (bookmark) => bookmark.id !== selectedBookmarkId
  );
}
