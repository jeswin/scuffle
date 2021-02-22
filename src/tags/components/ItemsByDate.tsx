import { Bookmark, Note, ScuffleEntity, Todo } from "../../types";
import TodoListItem from "../../todos/components/TodoListItem";
import { completeTodo } from "../actions";
import { ForgoRenderArgs, rerender } from "forgo";

export type ItemsByDateProps = {
  timeAgo: string;
  items: ScuffleEntity[];
};

export default function ItemsByDate(props: ItemsByDateProps) {
  return {
    render(props: ItemsByDateProps, args: ForgoRenderArgs) {
      function onCompleteTodo(todo: Todo) {
        completeTodo(todo);
        rerender(args.element);
      }

      return (
        <div>
          <h2 className="py-2 font-bold">{props.timeAgo}</h2>
          <ul>
            {(props.items.filter((x) => x.type === "todo") as Todo[]).map(
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
      );
    },
  };
}
