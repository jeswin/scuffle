import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { match, Link } from "forgo-router";
import { bindToStates } from "forgo-state";
import { iconsDefault as icons } from "../../icons/index.js";
import state from "../state.js";

export type MainBarProps = {};

const items = [
  ["home", "Home", icons.home],
  ["notes", "Notes", icons.notes],
  ["todos", "Todos", icons.add_task],
  ["bookmarks", "Bookmarks", icons.bookmarks],
  ["gallery", "Gallery", icons.photo_library],
  ["discover", "Discover", icons.stars],
  ["settings", "Settings", icons.settings],
];

export default function MainBar(props: MainBarProps) {
  let showSettingsPopup = false;

  const component = {
    render(props: MainBarProps, { update }: ForgoRenderArgs) {
      function updateView(fn: () => void) {
        fn();
        update();
      }

      const selected = match("/")
        ? "home"
        : match("/notes/")
        ? "notes"
        : match("/todos/")
        ? "todos"
        : match("/bookmarks")
        ? "bookmarks"
        : match("/discover/")
        ? "discover"
        : match("/settings/")
        ? "settings"
        : "";

      return (
        <nav>
          <div className="flex flex-col text-sm">
            <ul className="mt-4">
              <li className="mb-4">
                <div className="flex">
                  <button
                    onclick={(e) =>
                      updateView(() => {
                        showSettingsPopup = !showSettingsPopup;
                      })
                    }
                    className="max-w-xs rounded-full"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  <div className="ml-2">
                    <p className="text-sm font-bold">Scuffle</p>
                    <p className="text-xs -ml-0.5">{state.profile.name}</p>
                  </div>
                </div>
              </li>
              {items.map(([id, text, icon]) =>
                id === selected ? (
                  <li className="text-gray-900 -ml-4 pl-12 pr-4 py-2 rounded-md font-medium cursor-pointer">
                    <Link
                      className="inline-block align-middle items-center flex"
                      href={`/${id === "home" ? "" : id}`}
                    >
                      {icon}
                      <span className="inline-block pl-2 font-bold">
                        {text}
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li className="text-gray-700 -ml-4 pl-12 pr-4 py-2 rounded-md font-medium cursor-pointer">
                    <Link
                      className="inline-block align-middle items-center flex"
                      href={`/${id === "home" ? "" : id}`}
                    >
                      {icon}
                      <span className="inline-block pl-2">{text}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>

            {state.profile.type === "none" ? (
              <div>
                <div className="text-gray-900 -ml-4 pl-12 pr-4 py-2 rounded-md font-medium text-sm cursor-pointer">
                  <Link
                    className="inline-block align-middle flex text-red-600"
                    href="/settings/account"
                  >
                    <div className="mt-1">{icons.warning}</div>
                    <span className="inline-block pl-2">
                      Not backed up.
                      <br />{" "}
                      <span className="underline font-bold">Fix now</span>.
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}

            <ul className="mt-4">
              <li className="text-gray-800 -ml-4 pl-12 pr-4 py-2 rounded-md font-medium cursor-pointer">
                <div className="flex">
                  <span className="mt-0.5">{icons.get_app}</span>
                  <span className="pl-2">Download App</span>
                </div>
                <p className="text-xs">
                  For Windows, Mac, Linux,
                  <br />
                  Android and iOS.
                </p>
              </li>
              <li className="text-gray-800 -ml-4 pl-12 pr-4 py-2 rounded-md font-medium cursor-pointer">
                Browser Plugins
                <div className="flex pt-1">
                  <span className="mr-1">
                    <img
                      src="/img/chrome.svg"
                      height="16"
                      width="16"
                      alt="chrome icon"
                    />
                  </span>
                  <span className="mr-1">
                    <img
                      src="/img/firefox.svg"
                      height="16"
                      width="16"
                      alt="firefox icon"
                    />
                  </span>
                  <span className="mr-1">
                    <img
                      src="/img/safari.svg"
                      height="16"
                      width="16"
                      alt="safari icon"
                    />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      );
    },
  };

  return bindToStates([state], component as any);
}
