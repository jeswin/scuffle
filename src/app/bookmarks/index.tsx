import * as forgo from "forgo";
import { matchExactUrl } from "forgo-router";
import BookmarksHome from "./components/Home.js";

export default function BookmarksIndex() {
  return {
    render() {
      return matchExactUrl("/bookmarks", () => <BookmarksHome />);
    },
  };
}
