import { TagInfo } from "../types";
import { colorForString } from "../modules/colors";
import { Link } from "forgo-router";

export type TagCloudProps = {
  tags: TagInfo[];
};

export default function TagCloud({ tags: tags }: TagCloudProps) {
  return {
    render() {
      return (
        <div
          style={{
            textAlign: "center",
            padding: "0 1em",
          }}
        >
          {tags.map((tagInfo) => {
            const [bg, fg] = colorForString(tagInfo.tag.name);
            return (
              <Link
                key={tagInfo.tag.name}
                href={`/tags/${tagInfo.tag.name}`}
                className="link"
                style={{
                  ...styles.Link,
                  margin: "4px 0.3em 4px 0",
                  backgroundColor: bg,
                  color: fg,
                  display: "block",
                  float: "left",
                }}
              >
                #
                {tagInfo.tag.name +
                  (tagInfo.count > 1 ? ` (${tagInfo.count})` : "")}
              </Link>
            );
          })}
        </div>
      );
    },
  };
}
