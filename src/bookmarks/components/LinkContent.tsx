import { ForgoRenderArgs } from "forgo";
import { Bookmark } from "../../types";
import Tag from "../../components/Tag";
import { getHostname } from "../../modules/urlUtils";
import { iconsDefault } from "../../icons";

export type LinkContentProps = {
  bookmark: Bookmark;
  summarize: boolean;
};

export default function LinkContent(initialProps: LinkContentProps) {
  return {
    render(props: LinkContentProps, args: ForgoRenderArgs) {
      return (
        <div className="flex mb-4">
          <div className="min-w-6 pt-1">
            {props.summarize ? iconsDefault.bookmarks : iconsDefault.more_vert}
          </div>
          <div>
          <p>
              <a
                href={props.bookmark.url}
                className="text-sm inline-block hover:underline"
              >
                {props.bookmark.title ?? props.bookmark.url}
              </a>
            </p>
            <p className="text-xs inline-block text-gray-500">
              <span className="mr-2">{getHostname(props.bookmark.url)}</span>
              {props.bookmark.words ? (
                <span className="mr-2">{props.bookmark.words} words</span>
              ) : (
                <></>
              )}
              {props.bookmark.sharing && props.bookmark.sharing.saves ? (
                <span>{props.bookmark.sharing.saves} shares</span>
              ) : (
                <></>
              )}
            </p>
            {props.bookmark.tags ? (
              <>
                <p>
                  {props.bookmark.tags.map((x) => (
                    <Tag tag={x} />
                  ))}
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    },
  };
}
