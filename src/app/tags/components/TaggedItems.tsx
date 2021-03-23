import { Link } from "forgo-router";
import ItemsByDate from "../../components/ItemsByDate";
import { completeTodo, loadTaggedItems } from "../actions";
import state from "../state";
import { bindToStates } from "forgo-state";
import LinkButton from "../../components/LinkButton";
import { colorForString } from "../../../utils/colors";
import { ForgoComponent, ForgoRenderArgs } from "forgo";

export type TagViewProps = {};

export default function TagView(initialProps: TagViewProps) {
  const component = {
    render(props: TagViewProps, { update }: ForgoRenderArgs) {
      return (
        <div>
          <div className="flex mb-4">
            {state.tags.map((tag) => (
              <p style={{ color: colorForString(tag) }}>#{tag}</p>
            ))}
            <div>
              <LinkButton style="button" className="ml-2" text="Pin Tag" />
            </div>
          </div>

          <ItemsByDate completeTodo={completeTodo} items={state} />
        </div>
      );
    },
  };

  return bindToStates([state], component);
}
