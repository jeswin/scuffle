import { ForgoRenderArgs } from "forgo";
import { getClassName } from "../../utils/uiUtils";

export type TextFieldProps = {
  label?: string;
  type: string;
  placeholder?: string;
  dark?: boolean;
};

export default function TextField(initialProps: TextFieldProps) {
  return {
    render(props: TextFieldProps, args: ForgoRenderArgs) {
      return (
        <span
          className={getClassName(
            "inline-block p-2 border-b",
            props.dark ? "border-gray-500" : "border-gray-300"
          )}
        >
          <input
            type={props.type}
            className="focus:outline-none"
            placeholder={props.placeholder}
          />
        </span>
      );
    },
  };
}
