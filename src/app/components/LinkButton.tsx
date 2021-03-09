import { getClassName } from "../../utils/uiUtils";

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
          className={getClassName(
            "px-1 text-xs rounded border border-gray-300 hover:bg-gray-200 focus:outline-none",
            props.className
          )}
        >
          {props.text}
        </button>
      ) : (
        <span
          className={getClassName("px-1 text-xs underline", props.className)}
        >
          {props.text}
        </span>
      );
    },
  };
}
