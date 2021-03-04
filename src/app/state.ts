import { defineState } from "forgo-state";
import { Bookmark, Note, Profile, TagInfo, Todo } from "../types";

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
  profile: { name: "" },
  bookmarks: [],
  notes: [],
  todos: [],
  recentTags: [],
});

export default state;
