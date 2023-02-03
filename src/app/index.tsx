import * as forgo from "forgo";
import { Router, matchUrl, matchExactUrl } from "forgo-router";

import MainBar from "./components/MainBar.js";
import SearchBar from "./components/SearchBar.js";
import Home from "./home/index.js";
import Notes from "./notes/index.js";
import Bookmarks from "./bookmarks/index.js";
import Todos from "./todos/index.js";
import Tags from "./tags/index.js";
import Settings from "./settings/index.js";
import PageNotFound from "../PageNotFound.js";
import { loadProfile } from "./actions/index.js";

export default function App() {
  loadProfile();

  return {
    render() {
      return (
        <Router>
          {/* <TopBanner text="You are not syncing with personal storage yet." /> */}
          <div className="max-w-7xl m-auto flex min-h-screen text-gray-800 text-sm">
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
