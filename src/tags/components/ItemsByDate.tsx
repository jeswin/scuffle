import { Bookmark, Note, Todo } from "../../types";
import TodoListItem from "../../todos/components/TodoListItem";
import { completeTodo } from "../actions";
import { ForgoRenderArgs, rerender } from "forgo";

export type ItemsByDateProps = {
  timeAgo: string;
  items: {
    todos: Todo[];
    notes: Note[];
    bookmarks: Bookmark[];
  };
};

export default function ItemsByDate(props: ItemsByDateProps) {
  return {
    render(props: ItemsByDateProps, args: ForgoRenderArgs) {
      function onCompleteTodo(todo: Todo) {
        completeTodo(todo);
        rerender(args.element);
      }

      return (
        <div className="flex flex-wrap">
          <div className="w-32 pt-2 text-xs font-bold">{props.timeAgo}</div>
          <ul>
            {props.items.todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onCompleteTodo={onCompleteTodo}
              />
            ))}
          </ul>
        </div>
      );
    },
  };
}
