import * as actions from "../actions";
import TodoListItem from "./TodoListItem";
import { Todo } from "../../types";
import state from "../state";

export default function TodoList() {
  actions.loadTodos();

  return {
    render() {
      function onCompleteTodo(todo: Todo) {
        actions.completeTodo(todo);
      }

      <div>
        <h3>Today</h3>
        <ul>
          {state.tasks?.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </ul>
      </div>;
    },
  };
}
