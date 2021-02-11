import Notes from "./notes/Home";
import Bookmarks from "./bookmarks/Home";
import Tasks from "./tasks/Home";
import Tags from "./tags/Home";

import { Router, matchUrl, updateRoute, matchExactUrl } from "forgo-router";

import PageNotFound from "./PageNotFound";
import Loading from "./Loading";
import { getCookie } from "./lib/cookie";
import MainDrawer from "./components/MainDrawer";

window.addEventListener("popstate", () => {
  updateRoute();
});

window.addEventListener("load", () => {
  document.getElementById("startup-loader")?.remove();
  updateRoute();
});

export default function App() {
  function loadInitialState() {
    const cookie = getCookie("border-patrol-jwt");
    if (cookie) {
      // setTimeout(
      //   () =>
      //     loadAccountDetails(store).then(() => {
      //       loadedInitialState = true;
      //     }),
      //   1000
      // );
    }
  }

  // const isOnRoot = match("/", { exact: true }) !== false;
  return {
    render() {
      return (
        <Router>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1, maxWidth: "300px" }}>
              <MainDrawer />
            </div>
            <div style={{ flex: 1, margin: "1em 2em 0 1em" }}>
              {matchExactUrl("/", () => <Notes />) ||
                matchUrl("/tasks", () => <Tasks />) ||
                matchUrl("/notes", () => <Notes />) ||
                matchUrl("/bookmarks", () => <Bookmarks />) ||
                matchUrl("/tags", () => <Tags />) || <PageNotFound />}
            </div>
            {/* <SnackbarQueue messages={snackbarQueue.messages} leading stacked /> */}
          </div>
        </Router>
      );
    },
  };
}
