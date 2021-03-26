import { matchExactUrl } from "forgo-router";
import TodosHome from "./components/Home";
import * as forgo from "forgo";

export default function TodosIndex() {
  return {
    render() {
      return matchExactUrl("/todos", () => <TodosHome />);
    },
  };
}
