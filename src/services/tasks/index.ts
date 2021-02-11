import { Task } from "../../types";
import * as data from "./dummyTasks";

// Temporarily store this in mem.
// This stuff is gonna go into filesystem/git
let tasks: Task[] = data.tasks;

let completedTasks: Task[] = [];

export async function getAllTasks(): Promise<Task[]> {
  return [...tasks];
}

export async function saveTask(task: Task): Promise<void> {
  tasks = tasks.concat(task);
}

export async function completeTask(task: Task): Promise<void> {
  completedTasks = completedTasks.concat(task);
  tasks = tasks.filter((x) => x.id !== task.id);
}

export async function getItemsByTags(tags: string[]): Promise<Task[]> {
  return tasks.filter(
    (b) => b.tags && b.tags.some((tag) => tags.includes(tag))
  );
}
