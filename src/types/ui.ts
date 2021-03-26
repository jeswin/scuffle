import { CSSProperties } from "forgo";
import * as forgo from "forgo";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

export interface FormEvent<T extends EventTarget> extends Event {
  target: T | null;
}
