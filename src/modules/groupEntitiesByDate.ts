import { getTodayStart, msInADay, getMonth } from "../lib/dateFunctions";

export default function groupEntitiesByDate<T>(
  entitiesAndTimeSelectors: [T[], (x: T) => number][],
  opts?: { reverseChronological?: boolean; mergePast?: boolean }
): Map<string, T[]> {
  const options = {
    reverseChronological: opts?.reverseChronological ?? true,
    mergePast: opts?.mergePast ?? false,
  };

  const result = new Map<string, [number, T[]]>();

  const todayStart = getTodayStart();
  const tomorrowStart = todayStart + msInADay;
  const upcomingStart = todayStart + 2 * msInADay;
  const yesterdayStart = todayStart - msInADay;
  const twoDaysBackStart = todayStart - 2 * msInADay;
  const threeDaysBackStart = todayStart - 3 * msInADay;

  const dateThreeDaysBack = new Date(threeDaysBackStart);

  const tomorrowText = "Tomorrow";
  const upcomingText = "Upcoming";
  const overdueText = "Overdue";
  const todayText = "Today";
  const yesterdayText = "Yesterday";
  const twoDaysBackText = "2 days ago";
  const threeDaysBackText = "3 days ago";

  for (const [items, timeSelector] of entitiesAndTimeSelectors) {
    for (const item of items) {
      const itemTime = timeSelector(item);
      const itemDate = new Date(itemTime);
      const dateString =
        itemTime >= upcomingStart
          ? upcomingText
          : itemTime >= tomorrowStart
          ? tomorrowText
          : itemTime >= todayStart
          ? todayText
          : options.mergePast
          ? overdueText
          : itemTime >= yesterdayStart
          ? yesterdayText
          : itemTime >= twoDaysBackStart
          ? twoDaysBackText
          : itemTime > threeDaysBackStart
          ? threeDaysBackText
          : itemDate.getMonth() === dateThreeDaysBack.getMonth() &&
            itemDate.getFullYear() === dateThreeDaysBack.getFullYear()
          ? `Earlier in ${getMonth(itemDate.getMonth())}`
          : `${getMonth(itemDate.getMonth())}, ${itemDate.getFullYear()}`;

      const mapEntry = result.get(dateString);
      if (mapEntry) {
        const [time, itemsAtTime] = mapEntry;
        result.set(dateString, [time, itemsAtTime.concat(item)]);
      } else {
        result.set(dateString, [itemTime, [item]]);
      }
    }
  }

  // We are in another month if today and three-days-back have different months.

  const sortedList = Array.from(result.entries()).sort((a, b) =>
    options.reverseChronological ? b[1][0] - a[1][0] : a[1][0] - b[1][0]
  );

  return sortedList.reduce((acc, [timeString, [timeNum, items]]) => {
    acc.set(timeString, items);
    return acc;
  }, new Map<string, T[]>());
}
