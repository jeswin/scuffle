import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { bindToStates } from "forgo-state";
import ItemsByDate from "../components/ItemsByDate.js";
import state from "../state.js";
import { completeTodo, loadHomePageData } from "../actions/index.js";

export default function HomeIndex() {
  loadHomePageData();

  const component = {
    render(props: unknown, { update }: ForgoRenderArgs) {
      return (
        <div>
          <ItemsByDate completeTodo={completeTodo} items={state} />
        </div>
      );
    },
  };

  return bindToStates([state], component as any);
}
