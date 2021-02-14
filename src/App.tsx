// import Notes from "./notes";
// import Bookmarks from "./bookmarks";
// import Tasks from "./tasks";
// import Tags from "./tags";

import { Router, matchUrl, updateRoute, matchExactUrl } from "forgo-router";

import PageNotFound from "./PageNotFound";
import Loading from "./Loading";
import { getCookie } from "./lib/cookie";
import TopBar from "./components/TopBar";

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
            <TopBar selected="home" />
            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
              </div>
            </main>
          </div>

          {/* <div style={{ display: "flex", flexDirection: "row" }}>
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
            
          </div> */}
        </Router>
      );
    },
  };
}
