import { ForgoRenderArgs } from "forgo";
import { getClassName } from "../../utils/uiUtils";

export type TextFieldProps = {
  label?: string;
  type: string;
  placeholder?: string;
  dark?: boolean;
  labelWidth?: string;
  textFieldClassName?: string;
  underlineLabel?: boolean;
};

export default function TextField(initialProps: TextFieldProps) {
  return {
    render(props: TextFieldProps, args: ForgoRenderArgs) {
      return (
        <p
          className={getClassName(
            "inline-block pb-1 flex",
            props.underlineLabel ? "border-b" : undefined,
            props.underlineLabel && props.dark
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
                textAlign: "right",
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
              !props.underlineLabel ? "border-b" : undefined,
              !props.underlineLabel && props.dark
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
