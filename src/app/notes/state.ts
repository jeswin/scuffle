import { defineState } from "forgo-state";
import { Note } from "../../types";

export interface IState {
  notes: Note[];
}

export const state: IState = defineState({ notes: [] });

export default state;