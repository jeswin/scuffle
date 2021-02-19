import { Bookmark, Todo } from "../../types";
import { colorForString } from "../../modules/colors";
import { StylesDictionary } from "../../types/ui";
import { Link } from "forgo-router";
import { ForgoAfterRenderArgs, ForgoRenderArgs, rerender } from "forgo";
import Checkbox from "../../components/Checkbox";

export type BookmarksListItemProps = {
  bookmark: Bookmark;
};

export default function BookmarksListItem(props: BookmarksListItemProps) {
  return {
    render(props: BookmarksListItemProps, args: ForgoRenderArgs) {
      return (
        <li className="flex p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="mr-2"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,16,12,16z" />
                </g>
              </g>
            </g>
          </svg>
          <a href={props.bookmark.url} className="text-blue-700">
            {props.bookmark.title ?? props.bookmark.url}
          </a>
        </li>
      );
    },
  };
}
