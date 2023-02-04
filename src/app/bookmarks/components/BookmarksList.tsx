import * as forgo from "forgo";
import * as actions from "../actions/index.js";
import BookmarksListItem from "./BookmarksListItem.js";
import state from "../state.js";
import { bindToStates } from "forgo-state";
import groupEntitiesByDate from "../../../utils/groupEntitiesByDate.js";
import { iconsDefault as icons } from "../../../icons/index.js";

export default function BookmarksList() {
  actions.loadBookmarks();

  const component = {
    render() {
      const bookmarks = groupEntitiesByDate([
        [state.bookmarks, (x) => x.createdAt],
      ]);

      return (
        <div>
          {Array.from(bookmarks.entries()).map(([timeString, items]) => (
            <div className="mb-4">
              <div className="flex pb-2 items-center">
                {icons.access_time}
                <h2 className="pl-2 font-bold text-sm">{timeString}</h2>
              </div>
              <ul>
                {items.map((bookmark) => (
                  <BookmarksListItem
                    key={bookmark.id}
                    bookmark={bookmark}
                    summarize={false}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
  };

  return bindToStates([state], component as any);
}
