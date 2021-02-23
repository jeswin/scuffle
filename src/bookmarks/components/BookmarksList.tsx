import * as actions from "../actions";
import BookmarksListItem from "./BookmarksListItem";
import { Todo } from "../../types";
import state from "../state";
import { bindToStates } from "forgo-state";
import groupEntitiesByTime from "../../modules/groupEntitiesByTime";
import { iconsDefault as icons } from "../../icons";

export default function BookmarksList() {
  actions.loadBookmarks();

  const component = {
    render() {
      const bookmarks = groupEntitiesByTime(state.bookmarks);

      return (
        <div>
          {Array.from(bookmarks.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <div className="flex pb-4 items-center">
                {icons.access_time}
                <h2 className="pl-2">{timeString}</h2>
              </div>
              <ul>
                {items.map((bookmark) => (
                  <BookmarksListItem key={bookmark.id} bookmark={bookmark} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
  };

  return bindToStates([state], component);
}
