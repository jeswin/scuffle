import { Task } from "../../types";
import * as tasksService from "../../services/tasks";
import randomId from "../../lib/randomId";
import state from "../state";

export async function loadTasks(): Promise<void> {
  const tasks = await tasksService.getAllTasks();
  state.tasks = tasks;
}

export async function addTask(
  title: string,
  description: string | undefined
): Promise<void> {
  const task = {
    id: randomId(),
    title,
    description,
    createdAt: Date.now(),
  };

  await tasksService.saveTask(task);
  state.tasks = state.tasks.concat(task);
}

export async function completeTask(task: Task): Promise<void> {
  await tasksService.completeTask(task);
  state.tasks = state.tasks.filter((x) => x.id !== task.id);
  state.completedTasks = state.completedTasks.concat(task);
}
