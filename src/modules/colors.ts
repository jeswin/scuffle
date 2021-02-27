import { toHashCode } from "../lib/stringToHash";

const colors = [
  ["#d1c4e9", "#000063"],
  ["#f8bbd0", "#560027"],
  ["#bbdefb", "#002f6c"],
  ["#80cbc4", "#00251a"],
  ["#9ccc65", "#00251a"],
  ["#ff9800", "#c43e00"],
  ["#d7ccc8", "#1b0000"],
  ["#cfd8dc", "#000"],
] as [string, string][];

export function colorForString(str: string): [string, string] {
  const hash = toHashCode(str) + 2147483647;
  return colors[hash % 8];
}
