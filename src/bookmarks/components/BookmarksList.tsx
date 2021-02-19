import * as actions from "../actions";
import BookmarksListItem from "./BookmarksListItem";
import { Todo } from "../../types";
import state from "../state";
import { bindToStates } from "forgo-state";

export default function BookmarksList() {
  actions.loadBookmarks();

  const component = {
    render() {
      return (
        <div>
          <h3 className="mt-6 font-bold">Today</h3>
          <ul>
            {state.bookmarks?.map((bookmark) => (
              <BookmarksListItem key={bookmark.id} bookmark={bookmark} />
            ))}
          </ul>
        </div>
      );
    },
  };

  return bindToStates([state], component);
}
