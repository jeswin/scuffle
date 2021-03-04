import { ForgoComponent, ForgoNode } from "forgo";
import { Link } from "forgo-router";

export type LinkButtonProps = {
  style?: "button" | "link";
  text: string;
  className?: string;
};

export default function LinkButton(initialProps: LinkButtonProps) {
  return {
    render(props: LinkButtonProps) {
      return !props.style || props.style === "button" ? (
        <button
          className={`px-1 text-xs rounded border border-gray-300 hover:bg-gray-200${
            props.className ? ` ${props.className}` : ""
          }`}
        >
          {props.text}
        </button>
      ) : (
        <span
          className={`px-1 text-xs underline${
            props.className ? ` ${props.className}` : ""
          }`}
        >
          {props.text}
        </span>
      );
    },
  };
}
