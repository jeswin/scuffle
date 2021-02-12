import * as actions from "../actions";
import TasksListItem from "./TasksListItem";
import { Task } from "../../types";
import state from "../state";

export default function TasksList() {
  actions.loadTasks();

  return {
    render() {
      function onCompleteTask(task: Task) {
        actions.completeTask(task);
      }

      <div>
        <h3>Today</h3>
        <ul>
          {state.tasks?.map((task) => (
            <TasksListItem
              key={task.id}
              task={task}
              onCompleteTask={onCompleteTask}
            />
          ))}
        </ul>
      </div>;
    },
  };
}
