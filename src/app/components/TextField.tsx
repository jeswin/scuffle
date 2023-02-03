import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { getClassName } from "../../utils/uiUtils.js";

export type TextFieldProps = {
  label?: string;
  type: string;
  placeholder?: string;
  dark?: boolean;
  labelWidth?: string;
  textFieldClassName?: string;
  underline?: boolean;
  underlineLabel?: boolean;
  labelAlign?: "left" | "right";
};

export default function TextField(initialProps: TextFieldProps) {
  return {
    render(props: TextFieldProps, { update }: ForgoRenderArgs) {
      const underline = props.underline ?? true;
      return (
        <p
          className={getClassName(
            "inline-block pb-1 flex",
            underline && props.underlineLabel ? "border-b" : undefined,
            underline && props.underlineLabel && props.dark
              ? "border-gray-500"
              : "border-gray-300",
            props.textFieldClassName
          )}
        >
          {props.label ? (
            <span
              style={{
                display: "inline-block",
                marginRight: "1em",
                ...(props.labelAlign ? { textAlign: props.labelAlign } : {}),
                ...(props.labelWidth ? { width: props.labelWidth } : {}),
              }}
            >
              {props.label}
            </span>
          ) : (
            <></>
          )}
          <input
            type={props.type}
            className={getClassName(
              "focus:outline-none pb-1",
              props.textFieldClassName,
              underline &&  !props.underlineLabel ? "border-b" : undefined,
              underline && !props.underlineLabel && props.dark
                ? "border-gray-500"
                : "border-gray-300"
            )}
            placeholder={props.placeholder}
          />
        </p>
      );
    },
  };
}
