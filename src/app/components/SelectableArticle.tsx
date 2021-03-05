import { ForgoComponent, ForgoNode } from "forgo";
import Checkbox from "./Checkbox";

export type SelectableArticleProps = {
  title: string;
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
    render(props: SelectableArticleProps) {
      function onClick() {
        if (props.onClick) {
          props.onClick();
        }
      }

      return (
        <div
          className="px-1 pt-1 pb-2 mb-4 rounded-md border-2 cursor-pointer"
          onclick={onClick}
        >
          <div className="border-b pb-4 pl-4">
            <div>
              <h3 className="font-bold my-2">{props.title}</h3>
              <ul className={`grid grid-cols-${props.list.cols} gap-1`}>
                {props.list.items.map((x) => (
                  <li className="flex items-center">
                    <span className="text-green-600 pr-2">
                      {props.list.bullet}
                    </span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
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
