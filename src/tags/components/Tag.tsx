import { Link } from "forgo-router";
import { Todo, Note, Bookmark, ScuffleEntity } from "../../types";
import ItemsByDate from "./ItemsByDate";
import timeAgo from "../../lib/timeAgo";
import { loadTaggedItems } from "../actions";
import state from "../state";
import { bindToStates } from "forgo-state";

export type TagViewProps = {
  tags: string[];
};

function timeDiff(from: number, now: number = Date.now()) {
  return timeAgo(
    {
      minute: "min",
      minutes: "mins",
    },
    {
      ms: 60 * 60 * 1000,
      text: "in the past hour",
    }
  )(now, from);
}

type ScuffleEntities = {
  todos: Todo[];
  notes: Note[];
  bookmarks: Bookmark[];
};

function sortIntoTimeSlots(
  items: ScuffleEntities
): [string, ScuffleEntities][] {
  const now = Date.now();

  function group<T extends ScuffleEntity>(items: T[]) {
    return items.reduce(
      (acc, item) => {
        const timeDiffText = timeDiff(item.createdAt, now);
        acc[timeDiffText] = acc[timeDiffText]
          ? acc[timeDiffText].concat(item)
          : [item];
        return acc;
      },
      {} as {
        [name: string]: T[];
      }
    );
  }

  const groupedTasks = group(items.todos);
  const groupedNotes = group(items.notes);
  const groupedBookmarks = group(items.bookmarks);

  const allKeys = [
    ...new Set(
      Object.keys(groupedTasks)
        .concat(Object.keys(groupedNotes))
        .concat(Object.keys(groupedBookmarks))
    ),
  ];

  const sortedTimeDiffKeys = allKeys.sort((x, y) => {
    const xItem: ScuffleEntity =
      groupedTasks[x]?.[0] || groupedNotes[x]?.[0] || groupedBookmarks[x]?.[0];
    const yItem: ScuffleEntity =
      groupedTasks[y]?.[0] || groupedNotes[y]?.[0] || groupedBookmarks[y]?.[0];
    return yItem.createdAt - xItem.createdAt;
  });

  return sortedTimeDiffKeys.map((key) => [
    key,
    {
      todos: groupedTasks[key] || [],
      notes: groupedNotes[key] || [],
      bookmarks: groupedBookmarks[key] || [],
    },
  ]);
}

export default function TagView(props: TagViewProps) {
  loadTaggedItems(props.tags);

  const component = {
    render() {
      const sortedItems = sortIntoTimeSlots(state);
      return (
        <div>
          <div className="flex">
            {props.tags.map((tag) => (
              <h2 key={tag} className="text-lg mt-4">
                #{tag}
              </h2>
            ))}
            <Link href="#" className="border-b-2 border-blue-500 pb-0.5 text-blue-500 ml-4 mt-5 text-sm">Pin tag</Link>
          </div>

          <div className="mt-4 flex flex-col">
            {sortedItems.map(([timeAgo, items]) => (
              <ItemsByDate
                key={timeAgo.toString()}
                timeAgo={timeAgo}
                items={items}
              />
            ))}
          </div>
        </div>
      );
    },
  };

  return bindToStates([state], component);
}
