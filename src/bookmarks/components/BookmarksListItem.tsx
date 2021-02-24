import { Bookmark, Todo } from "../../types";
import { colorForString } from "../../modules/colors";
import { StylesDictionary } from "../../types/ui";
import { Link } from "forgo-router";
import { ForgoAfterRenderArgs, ForgoRenderArgs, rerender } from "forgo";
import Checkbox from "../../components/Checkbox";
import { iconsDefault } from "../../icons";

export type BookmarksListItemProps = {
  bookmark: Bookmark;
  summarize: boolean;
};

export default function BookmarksListItem(props: BookmarksListItemProps) {
  return {
    render(props: BookmarksListItemProps, args: ForgoRenderArgs) {
      return (
        <li className="flex py-1 items-center">
          {props.summarize ? iconsDefault.bookmarks : iconsDefault.more_vert}
          <a href={props.bookmark.url} className="ml-3 text-sm hover:underline">
            {props.bookmark.title ?? props.bookmark.url}
          </a>
        </li>
      );
    },
  };
}
