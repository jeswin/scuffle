import { Link } from "forgo-router";
import { ScuffleEntity } from "../../types";
import ItemsByDate from "./ItemsByDate";
import { loadTaggedItems } from "../actions";
import state from "../state";
import { bindToStates } from "forgo-state";
import groupEntitiesByTime from "../../modules/groupEntitiesByTime";

export type TagViewProps = {
  tags: string[];
};

export default function TagView(props: TagViewProps) {
  loadTaggedItems(props.tags);

  const component = {
    render() {
      const sortedItems = groupEntitiesByTime(
        ([] as ScuffleEntity[])
          .concat(state.bookmarks)
          .concat(state.notes)
          .concat(state.todos)
      );
      return (
        <div>
          <div className="flex">
            {props.tags.map((tag) => (
              <h2 key={tag} className="text-lg mt-4">
                #{tag}
              </h2>
            ))}
            <Link
              href="#"
              className="border-b-2 border-blue-500 pb-0.5 text-blue-500 ml-4 mt-5 text-sm"
            >
              Pin tag
            </Link>
          </div>

          <div className="mt-4 flex flex-col">
            {Array.from(sortedItems.entries()).map(([timeAgo, items]) => (
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
