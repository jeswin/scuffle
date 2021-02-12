import { matchExactUrl } from "forgo-router";
import TasksHome from "./components/Home";

export default function TasksIndex() {
  return {
    render() {
      return matchExactUrl("/tasks", () => <TasksHome />);
    },
  };
}
