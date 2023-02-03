import { defineState } from "forgo-state";
import { Bookmark, Note, Todo } from "../../types/index.js";

export interface IState {
  tags: string[];
  todos: Todo[];
  notes: Note[];
  bookmarks: Bookmark[];
}

const initialState: IState = defineState({
  tags: [],
  todos: [],
  notes: [],
  bookmarks: [],
});

export default initialState;
