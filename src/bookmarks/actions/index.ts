import state from "../state";
import * as bookmarksService from "../../services/bookmarks";
import randomId from "../../lib/randomId";

export async function loadBookmarks(): Promise<void> {
  const bookmarks = await bookmarksService.getAllBookmarks();
  state.bookmarks = bookmarks;
}

export async function addBookmarkAction(
  url: string,
  title: string
): Promise<void> {
  const bookmark = {
    id: randomId(),
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
