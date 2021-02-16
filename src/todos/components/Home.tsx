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
            <Link href="tasks/completed" className="border-b-2 border-blue-500 pb-0.5 text-blue-500">
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
