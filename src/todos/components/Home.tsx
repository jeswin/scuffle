import TodoList from "./TodoList";
import { navigateTo, Link } from "forgo-router";
import AddTodo from "./AddTodo";

export default function TodosHome() {
  return {
    render() {
      return (
        <div>
          <p style={{ fontSize: "0.8em", fontWeight: "bolder" }}>
            Active | <Link href="tasks/completed">Completed</Link>
          </p>
          <div style={{ margin: "0.4em 0 1em -0.2em" }}>
            <AddTodo collapsed={true} />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      );
    },
  };
}
