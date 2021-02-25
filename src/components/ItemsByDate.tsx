import { Bookmark, Note, ScuffleEntity, Todo } from "../types";
import TodoListItem from "../todos/components/TodoListItem";
import { ForgoRenderArgs, rerender } from "forgo";
import groupEntitiesByDate from "../modules/groupEntitiesByDate";
import { iconsDefault as icons } from "../icons";
import BookmarksListItem from "../bookmarks/components/BookmarksListItem";
import NotesListItem from "../notes/components/NotesListItem";

export type ItemsByDateProps = {
  completeTodo: (todo: Todo) => void;
  items: {
    bookmarks: Bookmark[];
    notes: Note[];
    todos: Todo[];
  };
};

export default function ItemsByDate(props: ItemsByDateProps) {
  return {
    render(props: ItemsByDateProps, args: ForgoRenderArgs) {
      function onCompleteTodo(todo: Todo) {
        props.completeTodo(todo);
        rerender(args.element);
      }

      const sortedItems = groupEntitiesByDate<ScuffleEntity>([
        [props.items.bookmarks, (x) => x.createdAt],
        [props.items.notes, (x) => x.createdAt],
      ]);

      return (
        <div className="mt-8">
          {Array.from(sortedItems.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <div className="flex pb-4 items-center">
                {icons.access_time}
                <h2 className="pl-2 font-bold text-sm">{timeString}</h2>
              </div>
              <ul>
                {(items.filter((x) => x.type === "bookmark") as Bookmark[]).map(
                  (bookmark: Bookmark) => (
                    <BookmarksListItem
                      key={bookmark.id}
                      bookmark={bookmark}
                      summarize={true}
                    />
                  )
                )}
                {(items.filter((x) => x.type === "note") as Note[]).map(
                  (note: Note) => (
                    <NotesListItem key={note.id} note={note} summarize={true} />
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      );
    },
  };
}
