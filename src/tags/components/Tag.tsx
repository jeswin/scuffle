import { Link } from "forgo-router";
import ItemsByDate from "../../components/ItemsByDate";
import { completeTodo, loadTaggedItems } from "../actions";
import state from "../state";
import { bindToStates } from "forgo-state";

export type TagViewProps = {
  tags: string[];
};

export default function TagView(props: TagViewProps) {
  loadTaggedItems(props.tags);

  const component = {
    render() {
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

          <ItemsByDate completeTodo={completeTodo} items={state} />
        </div>
      );
    },
  };

  return bindToStates([state], component);
}
