import { defineState } from "forgo-state";
import { Bookmark, Note, TagInfo, Todo } from "../types";

export interface IState {
  name?: string;
  bookmarks: Bookmark[];
  notes: Note[];
  todos: Todo[];
  device?: string;
  recentTags: TagInfo[];
  snack?: {
    message: string;
    onClick: () => void;
  };
}

const state: IState = defineState({
  bookmarks: [],
  notes: [],
  todos: [],
  recentTags: [],
});

export default state;
