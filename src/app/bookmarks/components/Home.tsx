import * as forgo from "forgo";
import BookmarksList from "./BookmarksList.js";
import AddBookmark from "./AddBookmark.js";

export default function BookmarksHome() {
  return {
    render() {
      return (
        <div>
          <div>
            <AddBookmark collapsed={true} />
          </div>
          <div>
            <BookmarksList />
          </div>
        </div>
      );
    },
  };
}
