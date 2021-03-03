import { ForgoRef, rerender, ForgoRenderArgs } from "forgo";
import { iconsDefault as icons } from "../../../icons";

export type AddBookmarkProps = {
  collapsed: boolean;
};

export default function AddBookmark(props: AddBookmarkProps) {
  let collapsed = props.collapsed;
  let bookmarkUrl = "";
  let bookmarkTitle = "";
  let bookmarkUrlElement: ForgoRef<HTMLInputElement> = {};
  let placeholderBookmarkUrlElement: ForgoRef<HTMLInputElement> = {};
  let bookmarkTitleElement: ForgoRef<HTMLInputElement> = {};

  return {
    render(props: AddBookmarkProps, args: ForgoRenderArgs) {
      function clickPlaceholder() {
        collapsed = false;
        rerender(args.element);
        (bookmarkUrlElement.value as HTMLInputElement).focus();
      }

      return collapsed ? (
        <div
          onclick={clickPlaceholder}
          className="pt-3 pr-2 pb-3 pl-2 mb-8 rounded-md border border-gray-400 max-w-3xl flex"
        >
          <span className="pt-1">{icons.bookmarks}</span>
          <input
            type="text"
            className="focus:outline-none ml-4 resize-none"
            key="note_contents_placeholder"
            ref={placeholderBookmarkUrlElement}
            onfocus={() => clickPlaceholder()}
            onclick={() => clickPlaceholder()}
            oncontextmenu={() => clickPlaceholder()}
            onkeypress={() => clickPlaceholder()}
            placeholder="Add a bookmark..."
          />
        </div>
      ) : (
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-lg sm:overflow-hidden">
                  <div className="bg-white pl-3 pr-3">
                    <div className="px-4 py-3 bg-white space-y-3 sm:p-6">
                      <div className="border-b p-2">
                        <input
                          ref={bookmarkUrlElement}
                          placeholder="Type a url..."
                          className="focus:outline-none"
                        ></input>
                      </div>
                      <div className="border-b p-2">
                        <input
                          placeholder="Optional description..."
                          className="focus:outline-none"
                        ></input>
                      </div>
                      <div className="flex space-x-4 border-b p-2">
                        <div style={{ width: "50px" }}>Tags</div>
                        <div>
                          <input
                            type="text"
                            className="focus:outline-none"
                            placeholder="starting typing tags..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                    <button className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                      Add Bookmark
                    </button>
                    <button className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    },
  };
}
