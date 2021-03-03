import { Bookmark } from "../../../types";
import { ForgoRenderArgs } from "forgo";
import LinkContent from "./LinkContent";
import VideoContent from "./VideoContent";

export type BookmarksListItemProps = {
  bookmark: Bookmark;
  summarize: boolean;
};

function getHostname(urlString: string) {
  const url = new URL(urlString);
  return url.hostname;
}

export default function BookmarksListItem(props: BookmarksListItemProps) {
  return {
    render(props: BookmarksListItemProps, args: ForgoRenderArgs) {
      const contentType =
        (props.bookmark.content && props.bookmark.content.type) || "link";

      return (
        <li>
          {contentType === "video" ? (
            <VideoContent
              bookmark={props.bookmark}
              summarize={props.summarize}
            />
          ) : (
            <LinkContent
              bookmark={props.bookmark}
              summarize={props.summarize}
            />
          )}
        </li>
      );
    },
  };
}
