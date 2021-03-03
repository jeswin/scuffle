import { Link } from "forgo-router";
import { Tag } from "../../types";
import { colorForString } from "../../utils/colors";

export type TagProps = {
  tag: string;
};

export default function Tag(initialProps: TagProps) {
  return {
    render({ tag }: TagProps) {
      const fg = colorForString(tag);
      return (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="link mr-1 text-xs hover:underline"
          style={{
            color: fg,
          }}
        >
          #{tag}
        </Link>
      );
    },
  };
}
