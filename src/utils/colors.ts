import { toHashCode } from "../lib/stringToHash";

const colors = [
  "#991B1B",
  "#D97706",
  "#047857",
  "#065F46",
  "#1E40AF",
  "#3730A3",
  "#5B21B6",
  "#831843",
  "#064E3B",
  "#312E81",
  "#78350F",
  "#B91C1C",
] as string[];

export function colorForString(str: string): string {
  const hash = toHashCode(str) + 2147483647;
  return colors[hash % colors.length];
}
