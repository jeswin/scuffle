import * as actions from "../actions";
import TodoListItem from "./TodoListItem";
import { Todo } from "../../types";
import state from "../state";
import { bindToStates } from "forgo-state";

export default function TodoList() {
  actions.loadTodos();

  const component = {
    render() {
      function onCompleteTodo(todo: Todo) {
        actions.completeTodo(todo);
      }

      return (
        <div>
          <h3 className="mt-6 font-bold">Today</h3>
          <ul>
            {state.tasks?.map((todo) => (
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

  return bindToStates([state], component);
}
