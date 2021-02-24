import { ScuffleEntityBase } from "../types";
import timeAgo from "../lib/timeAgo";

function timeDiff(from: number, now: number = Date.now()) {
  return timeAgo(
    {
      minute: "min",
      minutes: "mins",
    },
    {
      ms: 60 * 60 * 1000 * 24,
      text: "today",
    }
  )(now, from);
}

export default function groupEntitiesByTime<T extends ScuffleEntityBase>(
  items: T[],
  reverseChronological = true
): Map<string, T[]> {
  const now = Date.now();

  const result = new Map<string, [number, T[]]>();
  for (const item of items) {
    const timeDiffText = timeDiff(item.createdAt, now);
    const mapEntry = result.get(timeDiffText);
    if (mapEntry) {
      const [time, itemsAtTime] = mapEntry;
      result.set(timeDiffText, [time, itemsAtTime.concat(item)]);
    } else {
      result.set(timeDiffText, [item.createdAt, [item]]);
    }
  }

  const sortedList = Array.from(result.entries()).sort((a, b) =>
    reverseChronological ? b[1][0] - a[1][0] : a[1][0] - b[1][0]
  );

  return sortedList.reduce((acc, [timeString, [timeNum, items]]) => {
    acc.set(timeString, items);
    return acc;
  }, new Map<string, T[]>());
}
