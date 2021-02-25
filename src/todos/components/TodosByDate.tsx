import { Bookmark, Note, ScuffleEntity, Todo } from "../../types";
import TodoListItem from "../../todos/components/TodoListItem";
import { ForgoRenderArgs, rerender } from "forgo";
import groupEntitiesByDate from "../../modules/groupEntitiesByDate";
import { iconsDefault as icons } from "../../icons";
import BookmarksListItem from "../../bookmarks/components/BookmarksListItem";
import NotesListItem from "../../notes/components/NotesListItem";

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

      const today = new Date();
      const dueToday = props.items.todos.filter(
        (x) =>
          x.due &&
          x.due.date === today.getDate() &&
          x.due.month === today.getMonth() + 1 &&
          x.due.year === today.getFullYear()
      );

      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const dueTomorrow = props.items.todos.filter(
        (x) =>
          x.due &&
          x.due.date === tomorrow.getDate() &&
          x.due.month === tomorrow.getMonth() + 1 &&
          x.due.year === tomorrow.getFullYear()
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
              </ul>
            </div>
          ))}
        </div>
      );
    },
  };
}
