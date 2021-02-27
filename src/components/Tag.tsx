import { Link } from "forgo-router";
import { Tag } from "../types";
import { colorForString } from "../modules/colors";

export type TagProps = {
  tag: string;
};

export default function Tag(initialProps: TagProps) {
  return {
    render({ tag }: TagProps) {
      const [bg, fg] = colorForString(tag);
      return (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="link rounded-md mt-0.5 pl-3 pr-3 py-1 mr-1 text-xs"
          style={{
            backgroundColor: bg,
            color: fg,
          }}
        >
          #{tag}
        </Link>
      );
    },
  };
}
