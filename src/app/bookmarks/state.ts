import { defineState } from "forgo-state";
import { Bookmark } from "../../types/index.js";

export interface IState {
  bookmarks: Bookmark[];
}

const state: IState = defineState({ bookmarks: [] }); 

export default state;
