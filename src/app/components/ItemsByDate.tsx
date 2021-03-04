import { Bookmark, Note, ScuffleEntity, Todo } from "../../types";
import TodoListItem from "../todos/components/TodoListItem";
import { ForgoRenderArgs, rerender } from "forgo";
import groupEntitiesByDate from "../../utils/groupEntitiesByDate";
import { iconsDefault as icons } from "../../icons";
import BookmarksListItem from "../bookmarks/components/BookmarksListItem";
import NotesListItem from "../notes/components/NotesListItem";
import SectionHeading from "./SectionHeading";

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

      const groupedTodos = groupEntitiesByDate<Todo>(
        [[props.items.todos, (x) => x.createdAt]],
        { mergePast: true }
      );

      const groupedItems = groupEntitiesByDate<ScuffleEntity>([
        [props.items.bookmarks, (x) => x.createdAt],
        [props.items.notes, (x) => x.createdAt],
      ]);

      return (
        <div>
          {groupedTodos.size > 0 ? (
            <>
              <SectionHeading type="h2">Get these done...</SectionHeading>
              <div className="pb-2 rounded-md">
                {Array.from(groupedTodos.entries()).map(
                  ([timeString, items]) => (
                    <div className="mb-8 last:mb-6">
                      <SectionHeading type="h3" icon={icons.access_time}>
                        {timeString}
                      </SectionHeading>
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
                  )
                )}
              </div>
            </>
          ) : (
            <></>
          )}

          <SectionHeading type="h2">Bookmarks, Notes and Files</SectionHeading>
          {Array.from(groupedItems.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <SectionHeading type="h3" icon={icons.access_time}>
                {timeString}
              </SectionHeading>
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
