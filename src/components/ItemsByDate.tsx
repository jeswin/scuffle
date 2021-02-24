import { Bookmark, Note, ScuffleEntity, Todo } from "../types";
import TodoListItem from "../todos/components/TodoListItem";
import { completeTodo } from "../todos/actions";
import { ForgoRenderArgs, rerender } from "forgo";
import groupEntitiesByTime from "../modules/groupEntitiesByTime";
import { iconsDefault as icons } from "../icons";
import BookmarksListItem from "../bookmarks/components/BookmarksListItem";
import NotesListItem from "../notes/components/NotesListItem";

export type ItemsByDateProps = {
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
        completeTodo(todo);
        rerender(args.element);
      }

      const sortedItems = groupEntitiesByTime(
        ([] as ScuffleEntity[])
          .concat(props.items.bookmarks)
          .concat(props.items.notes)
          .concat(props.items.todos)
      );

      return (
        <div className="mt-8">
          {Array.from(sortedItems.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <div className="flex pb-4 items-center">
                {icons.access_time}
                <h2 className="pl-2 font-bold text-sm">{timeString}</h2>
              </div>
              <ul>
                {(items.filter((x) => x.type === "todo") as Todo[]).map(
                  (todo: Todo) => (
                    <TodoListItem
                      key={todo.id}
                      todo={todo}
                      onCompleteTodo={onCompleteTodo}
                    />
                  )
                )}
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
