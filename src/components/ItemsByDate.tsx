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

      const groupedTodos = groupEntitiesByDate<Todo>([
        [props.items.todos, (x) => x.createdAt],
      ], { mergePast: true });

      const groupedItems = groupEntitiesByDate<ScuffleEntity>([
        [props.items.bookmarks, (x) => x.createdAt],
        [props.items.notes, (x) => x.createdAt],
      ]);

      return (
        <div className="mt-8">
          <h2 className="mb-4 font-serif font-bold">Things to do...</h2>
          <div className="bg-yellow-100 px-6 pt-1 pb-2 mb-8 rounded-md">
            {Array.from(groupedTodos.entries()).map(([timeString, items]) => (
              <div className="mb-8 last:mb-6">
                <div className="flex mt-4 mb-4 items-center">
                  {icons.access_time}
                  <h3 className="pl-2 text-sm font-bold">{timeString}</h3>
                </div>
                <ul>
                  {items.map((todo: Todo) => (
                    <TodoListItem
                      key={todo.id}
                      todo={todo}
                      onCompleteTodo={onCompleteTodo}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h2 className="mb-4 font-serif font-bold">Bookmarks, Notes and Files</h2>
          {Array.from(groupedItems.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <div className="flex mt-4 mb-4 items-center">
                {icons.access_time}
                <h3 className="pl-2 text-sm font-bold">{timeString}</h3>
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
