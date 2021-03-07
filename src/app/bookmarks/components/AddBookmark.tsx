import { ForgoRef, rerender, ForgoRenderArgs } from "forgo";
import { iconsDefault as icons } from "../../../icons";
import PlaceholderTextBox from "../../components/PlaceholderTextBox";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

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
          <div className="px-8 pt-6 mb-6 flex-row space-y-4">
            <TextField
              type="text"
              placeholder="Type a url"
              textFieldClassName="w-full"
            />
            <TextField
              type="text"
              placeholder="Optional description"
              textFieldClassName="w-full"
            />
            <TextField
              type="text"
              label="Tags"
              placeholder="Start typing tags..."
              textFieldClassName="w-full"
            />
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
