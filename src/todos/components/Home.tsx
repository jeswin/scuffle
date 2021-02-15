import TodoList from "./TodoList";
import { Link } from "forgo-router";
import AddTodo from "./AddTodo";
import { loadTodos } from "../actions";

export default function TodosHome() {
  return {
    render() {
      return (
        <div>
          <p className="mt-4 text-sm">
            <span className="font-bold">Active</span> |{" "}
            <Link href="tasks/completed" className="text-blue-600 underline">
              Completed
            </Link>
          </p>
          <div className="mt-4">
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
