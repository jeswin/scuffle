import * as forgo from "forgo";
import { matchExactUrl } from "forgo-router";
import { loadTaggedItems } from "./actions/index.js";
import TaggedItems from "./components/TaggedItems.js";

export default function TagsIndex() {
  return {
    render() {
      return matchExactUrl("/tags/:id", (match) => {
        loadTaggedItems([match.params.id]);
        return <TaggedItems />;
      });
    },
  };
}
