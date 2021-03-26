import TodoList from "./TodoList";
import { Link } from "forgo-router";
import AddTodo from "./AddTodo";
import * as forgo from "forgo";

export default function TodosHome() {
  return {
    render() {
      return (
        <div>
          <p className="text-sm mb-4">
            <span className="font-bold">Active</span> |{" "}
            <Link href="tasks/completed" className="border-b-2 border-blue-500 pb-0.5 text-blue-500">
              Completed
            </Link>
          </p>
          <div>
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
