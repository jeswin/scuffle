import { defineState } from "forgo-state";
import { Bookmark, Note, Todo } from "../types";

export interface IState {
  todos: Todo[];
  notes: Note[];
  bookmarks: Bookmark[];
}

const initialState: IState = defineState({
  todos: [],
  notes: [],
  bookmarks: [],
});

export default initialState;
