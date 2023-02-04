import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { bindToStates } from "forgo-state";
import ItemsByDate from "../../components/ItemsByDate.js";
import { completeTodo } from "../actions/index.js";
import state from "../state.js";
import LinkButton from "../../components/LinkButton.js";
import { colorForString } from "../../../utils/colors.js";

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

  return bindToStates([state], component as any);
}
