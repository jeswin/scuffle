import { Router, matchUrl, updateRoute, matchExactUrl } from "forgo-router";

import TopBar from "./components/TopBar";
import TopBanner from "./components/TopBanner";
import Home from "./home";
import Notes from "./notes";
import Bookmarks from "./bookmarks";
import Todos from "./todos";
import Tags from "./tags";
import PageNotFound from "./PageNotFound";
import { getCookie } from "./lib/cookie";

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
          <div>
            <TopBanner text="You are not syncing with personal storage yet." />
            <TopBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {matchExactUrl("/", () => <Home />) ||
                matchUrl("/todos", () => <Todos />) ||
                matchUrl("/notes", () => <Notes />) ||
                matchUrl("/bookmarks", () => <Bookmarks />) ||
                matchUrl("/tags", () => <Tags />) || <PageNotFound />}
            </div>
          </div>
        </Router>
      );
    },
  };
}
