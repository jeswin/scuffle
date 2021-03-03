import { ForgoRenderArgs } from "forgo";
import { Bookmark, VideoContent } from "../../../types";
import Tag from "../../components/Tag";
import { getHostname } from "../../../utils/urlUtils";
import { iconsDefault } from "../../../icons";

export type VideoContentProps = {
  bookmark: Bookmark<VideoContent>;
  summarize: boolean;
};

function getVideoId(urlString: string) {
  const url = new URL(urlString);
  const params = url.searchParams;
  return params.get("v");
}

export default function VideoContent(initialProps: VideoContentProps) {
  return {
    render(props: VideoContentProps, args: ForgoRenderArgs) {
      return (
        <div className="flex mb-4">
          <div className="min-w-6 pt-1">
            {props.summarize
              ? iconsDefault.ondemand_video
              : iconsDefault.more_vert}
          </div>
          <div>
            <p className="mb-1">
              <a
                href={props.bookmark.url}
                className="text-sm inline-block hover:underline"
              >
                {props.bookmark.title ?? props.bookmark.url}
              </a>
            </p>
            <p>
              <img
                className="rounded"
                src={`https://img.youtube.com/vi/${getVideoId(
                  props.bookmark.url
                )}/3.jpg`}
                alt={`Video ${props.bookmark.title}`}
              />
            </p>
            <p className="text-xs inline-block text-gray-600">
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
