import * as forgo from "forgo";
import { Link } from "forgo-router";
import TodoList from "./TodoList.js";
import AddTodo from "./AddTodo.js";

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
