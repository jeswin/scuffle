import { ForgoNode } from "forgo";
import { getClassName } from "../../utils/uiUtils";

export type ButtonProps = {
  onClick?: (e: MouseEvent) => void;
  className?: string;
  type?: "primary" | "highlight" | "standard";
  children?: ForgoNode | ForgoNode[];
};

export default function Button(initialProps: ButtonProps) {
  return {
    render(props: ButtonProps) {
      const colorString =
        props.type === "highlight"
          ? "bg-green-700 text-white border-green-700"
          : props.type === "primary"
          ? "bg-white text-green-700 border-green-600 hover:bg-green-700 hover:text-white"
          : "bg-white text-gray-800 border-gray-600 hover:bg-gray-500 hover:text-white";

      function clickHandler(e: MouseEvent) {
        if (props.onClick) {
          props.onClick(e);
        }
      }

      return (
        <button
          className={getClassName(
            `inline-flex justify-center mr-2 py-1 px-4 border text-sm font-medium rounded-sm focus:outline-none ${colorString}`,
            props.className
          )}
          onclick={clickHandler}
        >
          {props.children}
        </button>
      );
    },
  };
}
