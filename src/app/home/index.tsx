import ItemsByDate from "../components/ItemsByDate";
import state from "../state";
import { completeTodo, loadHomePageData } from "../actions";
import { ForgoRenderArgs } from "forgo";
import { bindToStates } from "forgo-state";

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

  return bindToStates([state], component);
}
