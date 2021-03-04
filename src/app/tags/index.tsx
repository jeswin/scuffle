import { matchExactUrl } from "forgo-router";
import { loadTaggedItems } from "./actions";
import TaggedItems from "./components/TaggedItems";

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
