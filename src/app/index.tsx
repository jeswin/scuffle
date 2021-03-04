import { Router, matchUrl, updateRoute, matchExactUrl } from "forgo-router";

import MainBar from "./components/MainBar";
import SearchBar from "./components/SearchBar";
import Home from "./home";
import Notes from "./notes";
import Bookmarks from "./bookmarks";
import Todos from "./todos";
import Tags from "./tags";
import Settings from "./settings";
import PageNotFound from "../PageNotFound";
import { loadProfile } from "./actions";
import { bindToStates } from "forgo-state";
import state from "./state";

window.addEventListener("popstate", () => {
  updateRoute();
});

window.addEventListener("load", () => {
  document.getElementById("startup-loader")?.remove();
  updateRoute();
});

export default function App() {
  loadProfile();

  return {
    render() {
      return (
        <Router>
            {/* <TopBanner text="You are not syncing with personal storage yet." /> */}
            <div className="max-w-7xl m-auto flex min-h-screen text-gray-800">
              <div className="border-r border-gray-200 fixed min-w-48 min-h-full pl-4 xl:pl-12 xl:min-w-60">
                <MainBar />
              </div>
              <div className="flex-grow max-w-7xl pt-4 ml-60 xl:ml-72 mr-4">
                <SearchBar />
                {matchExactUrl("/", () => <Home />) ||
                  matchUrl("/todos", () => <Todos />) ||
                  matchUrl("/notes", () => <Notes />) ||
                  matchUrl("/bookmarks", () => <Bookmarks />) ||
                  matchUrl("/tags", () => <Tags />) ||
                  matchUrl("/settings", () => <Settings />) || <PageNotFound />}
              </div>
            </div>
          
        </Router>
      );
    },
  };
}
