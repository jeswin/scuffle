export function getClassName(part1: string, ...otherParts: (string | undefined)[]): string {
  const nonEmpty = otherParts.filter((x) => x);
  return nonEmpty.length === 0 ? part1 : `${part1} ${nonEmpty.join(" ")}`;
}
