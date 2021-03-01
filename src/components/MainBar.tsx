import { ForgoRenderArgs, rerender } from "forgo";
import { match, Link } from "forgo-router";
import { iconsDefault as icons } from "../icons";

export type TopBarProps = {};

const items = [
  ["home", "Home", icons.home],
  ["notes", "Notes", icons.notes],
  ["todos", "Todos", icons.add_task],
  ["bookmarks", "Bookmarks", icons.bookmarks],
  ["gallery", "Gallery", icons.photo_library],
  ["discover", "Discover", icons.stars],
  ["settings", "Settings", icons.settings],
];

export default function TopBar(props: TopBarProps) {
  let mobileLinksOpen = false;
  let showSettingsPopup = false;

  return {
    render(props: TopBarProps, args: ForgoRenderArgs) {
      function updateView(fn: () => void) {
        fn();
        rerender(args.element);
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
        <nav className="border-r border-gray-200 w-48 pl-4 min-h-full mr-12">
          <div className="flex flex-col fixed">
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
                    <p className="text-xs -ml-0.5">Jeswin Kumar</p>
                  </div>
                </div>
              </li>
              {items.map(([id, text, icon]) =>
                id === selected ? (
                  <li className="text-gray-800 -ml-4 px-12 py-2 rounded-md font-medium cursor-pointer">
                    <Link
                      className="inline-block align-middle items-center text-sm flex"
                      href={`/${id === "home" ? "" : id}`}
                    >
                      {icon}
                      <span className="inline-block pl-1">{text}</span>
                    </Link>
                  </li>
                ) : (
                  <li className="text-gray-700 -ml-4 px-12 py-2 rounded-md font-medium cursor-pointer">
                    <Link
                      className="inline-block align-middle items-center text-sm flex"
                      href={`/${id === "home" ? "" : id}`}
                    >
                      {icon}
                      <span className="inline-block pl-1">{text}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      );
    },
  };
}
