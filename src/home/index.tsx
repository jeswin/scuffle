import { Link } from "forgo-router";
import ItemsByDate from "../components/ItemsByDate";
import state from "../state";
import { loadHomePageData } from "../actions";
import { ForgoRenderArgs, rerender } from "forgo";

export default function HomeIndex() {
  loadHomePageData();

  return {
    render(props: unknown, args: ForgoRenderArgs) {
      return (
        <div>
          <ItemsByDate items={state} />
        </div>
      );
    },
  };
}
