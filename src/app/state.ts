import { defineState } from "forgo-state";
import { Bookmark, Note, Profile, TagInfo, Todo } from "../types/index.js";

export interface IState {
  profile: Profile;
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
  profile: { type: "none", name: "" },
  bookmarks: [],
  notes: [],
  todos: [],
  recentTags: [],
});

export default state;
