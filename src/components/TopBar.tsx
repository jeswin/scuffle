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
        : "";

      return (
        <nav className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {items.map(([id, text, icon]) =>
                      id === selected ? (
                        <div className="bg-gray-300 text-black -ml-4 px-3 py-2 rounded-md font-medium cursor-pointer">
                          <Link
                            className="inline-block align-middle items-center text-sm flex"
                            href={`/${id === "home" ? "" : id}`}
                          >
                            {icon}
                            <span className="inline-block pl-1">{text}</span>
                          </Link>
                        </div>
                      ) : (
                        <div className="text-gray-700 -ml-4 px-3 py-2 rounded-md font-medium cursor-pointer">
                          <Link
                            className="inline-block align-middle items-center text-sm flex"
                            href={`/${id === "home" ? "" : id}`}
                          >
                            {icon}
                            <span className="inline-block pl-1">{text}</span>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="ml-3 relative bg-gray-200 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="-4 -4 32 32"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
                      />
                    </svg>
                  </button>

                  <button className="ml-3 relative bg-gray-200 p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onclick={(e) =>
                          updateView(() => {
                            showSettingsPopup = !showSettingsPopup;
                          })
                        }
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
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
                    </div>

                    <div
                      className={`${
                        showSettingsPopup ? "block" : "hidden"
                      } origin-top-right absolute right-0 mt-2 w-48 rounded-md py-1 bg-white ring-1 ring-black ring-opacity-5`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="-mr-2 flex md:hidden"
                onclick={(e) =>
                  updateView(() => {
                    mobileLinksOpen = !mobileLinksOpen;
                  })
                }
              >
                <button className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white">
                  <span className="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`${mobileLinksOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>

              <a
                href="#"
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Notes
              </a>

              <a
                href="#"
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Todos
              </a>

              <a
                href="#"
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Bookmarks
              </a>

              <a
                href="#"
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Discover
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-b border-gray-300">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-gray-500">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button className="ml-auto bg-gray-300 flex-shrink-0 p-1 rounded-full text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-gray-700"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    },
  };
}
