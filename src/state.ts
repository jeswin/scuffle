import { defineState } from "forgo-state";
import { TagInfo } from "./types";

export interface IState {
  name?: string;
  device?: string;
  recentTags: TagInfo[];
  snack?: {
    message: string;
    onClick: () => void;
  };
}

const state: IState = defineState({ recentTags: [] });

export default state;

