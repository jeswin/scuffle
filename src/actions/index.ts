import { getAllTags } from "../services/tags";
import store from "../state";

export async function loadRecentTags(): Promise<void> {
  const tags = await getAllTags();
  store.recentTags = tags;
}
