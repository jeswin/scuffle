import { ForgoComponent, ForgoNode, ForgoRenderArgs, rerender } from "forgo";
import * as forgo from "forgo";
import { getClassName } from "../../utils/uiUtils.js";
import Checkbox from "./Checkbox.js";

export type SelectableArticleProps = {
  title: string;
  highlightOnHover?: boolean;
  highlightOnSelect?: boolean;
  list: {
    items: string[];
    cols: number;
    bullet: ForgoComponent<any>;
  };
  footer: {
    left: ForgoNode;
    right?: ForgoNode;
  };
  selected?: boolean;
  onClick?: () => void;
};

export default function SelectableArticle(
  initialProps: SelectableArticleProps
) {
  return {
    render(props: SelectableArticleProps, { update }: ForgoRenderArgs) {
      function onClick() {
        if (props.onClick) {
          props.onClick();
        }
      }

      return (
        <div
          className={getClassName(
            "px-1 pt-1 pb-2 mb-4 rounded-md border-2 cursor-pointer",
            props.highlightOnHover ? "hover:border-gray-400" : undefined,
            props.highlightOnSelect && props.selected
              ? "bg-green-50 border-green-600"
              : undefined
          )}
          onclick={onClick}
        >
          <div className="border-b mt-2 ml-2 pb-4">
            <div className="flex">
              <div className="mr-2 mt-1">
                <Checkbox checked={props.selected} />
              </div>
              <div>
                <h3 className="text-lg font-bold mt-1 mb-2">{props.title}</h3>
                <ul
                  className={`-ml-2 grid ${
                    props.list.cols === 2 ? "grid-cols-2" : "grid-cols-1"
                  } gap-1`}
                >
                  {props.list.items.map((x) => (
                    <li className="flex items-center">
                      {props.list.bullet}
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pl-4 pt-2 pr-4 flex items-center">
            <div className="flex-grow">{props.footer.left}</div>
            <div>{props.footer.right}</div>
          </div>
        </div>
      );
    },
  };
}
