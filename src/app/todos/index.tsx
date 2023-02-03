import * as forgo from "forgo";
import { matchExactUrl } from "forgo-router";
import TodosHome from "./components/Home.js";

export default function TodosIndex() {
  return {
    render() {
      return matchExactUrl("/todos", () => <TodosHome />);
    },
  };
}
