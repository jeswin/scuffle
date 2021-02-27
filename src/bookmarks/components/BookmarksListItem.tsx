import { Bookmark } from "../../types";
import { iconsDefault } from "../../icons";
import Tag from "../../components/Tag";
import { ForgoRenderArgs } from "forgo";

export type BookmarksListItemProps = {
  bookmark: Bookmark;
  summarize: boolean;
};

export default function BookmarksListItem(props: BookmarksListItemProps) {
  return {
    render(props: BookmarksListItemProps, args: ForgoRenderArgs) {
      return (
        <li className="flex mb-4">
          <div className="min-w-6 pt-1">
            {props.summarize ? iconsDefault.bookmarks : iconsDefault.more_vert}
          </div>
          <div>
            <a
              href={props.bookmark.url}
              className="mr-3 text-sm inline-block hover:underline"
            >
              {props.bookmark.title ?? props.bookmark.url}
            </a>
            <span className="inline-block">
              {props.bookmark.tags
                ? props.bookmark.tags.map((x) => <Tag tag={x} />)
                : undefined}
            </span>
          </div>
        </li>
      );
    },
  };
}
