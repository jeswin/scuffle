import { ForgoRef, rerender, ForgoRenderArgs } from "forgo";
import { iconsDefault as icons } from "../../../icons";
import PlaceholderTextBox from "../../components/PlaceholderTextBox";
import Button from "../../components/Button";

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
        <PlaceholderTextBox
          onClick={clickPlaceholder}
          ref={placeholderBookmarkUrlElement}
          placeholder="Add a bookmark..."
          icon={icons.bookmarks}
        />
      ) : (
        <div className="bg-white max-w-lg mb-8 shadow rounded-lg">
          <div className="px-8 pt-4 pb-8 flex-row space-y-3">
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
            <div className="flex border-b p-2">
              <div className="pr-4">Tags</div>
              <div>
                <input
                  type="text"
                  className="focus:outline-none"
                  placeholder="starting typing tags..."
                />
              </div>
            </div>
          </div>

          <div className="px-4 py-3 bg-gray-50 text-left border border-t border-gray-200">
            <Button type="primary">Add Bookmark</Button>
            <Button>Cancel</Button>
          </div>
        </div>
      );
    },
  };
}
