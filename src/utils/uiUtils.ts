export function getClassName(part1: string, part2?: string): string {
  return part2 ? `${part1} ${part2}` : part1;
}
