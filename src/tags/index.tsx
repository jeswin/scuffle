import { matchExactUrl } from "forgo-router";
import Tag from "./components/Tag";

export default function TagsIndex() {
  return {
    render() {
      return matchExactUrl("/tags/:id", (match) => (
        <Tag tags={[match.params.id]} />
      ));
    },
  };
}
