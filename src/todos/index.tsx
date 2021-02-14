import { matchExactUrl } from "forgo-router";
import TodosHome from "./components/Home";

export default function TodosIndex() {
  return {
    render() {
      return matchExactUrl("/todos", () => <TodosHome />);
    },
  };
}
