import * as actions from "../actions";
import TodoListItem from "./TodoListItem";
import { Todo } from "../../types";
import state from "../state";
import { bindToStates } from "forgo-state";
import groupEntitiesByTime from "../../modules/groupEntitiesByTime";
import { iconsDefault as icons } from "../../icons";

export default function TodoList() {
  actions.loadTodos();

  const component = {
    render() {
      function onCompleteTodo(todo: Todo) {
        actions.completeTodo(todo);
      }

      const todos = groupEntitiesByTime(state.todos);
      return (
        <div>
          {Array.from(todos.entries()).map(([timeString, items]) => (
            <div className="mb-8">
              <div className="flex pb-4 items-center">
                {icons.access_time}
                <h2 className="pl-2">{timeString}</h2>
              </div>
              <ul>
                {items.map((todo) => (
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
      );
    },
  };

  return bindToStates([state], component);
}
