import { defineState } from "forgo-state";
import { Bookmark } from "../../types";

export interface IState {
  bookmarks: Bookmark[];
}

const state: IState = defineState({ bookmarks: [] }); 

export default state;
