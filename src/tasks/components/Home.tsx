import TasksList from "./TasksList";
import { navigateTo } from "forgo-router";
import AddTask from "./AddTask";

export default function TasksHome() {
  return {
    render() {
      return (
        <div>
          <p style={{ fontSize: "0.8em", fontWeight: "bolder" }}>
            Active |{" "}
            <a
              onclick={(e) => {
                navigateTo("tasks/completed");
                e.preventDefault();
              }}
              href="tasks/completed"
            >
              Completed
            </a>
          </p>
          <div style={{ margin: "0.4em 0 1em -0.2em" }}>
            <AddTask collapsed={true} />
          </div>
          <div>
            <TasksList />
          </div>
        </div>
      );
    },
  };
}
