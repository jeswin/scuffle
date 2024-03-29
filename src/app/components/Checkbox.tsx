import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";
import { getClassName } from "../../utils/uiUtils.js";

export type CheckboxProps = {
  text?: string;
  checked?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};

export default function Checkbox(initialProps: CheckboxProps) {
  return {
    render(props: CheckboxProps, { update }: ForgoRenderArgs) {
      function onClick() {
        if (props.onChange) {
          props.onChange(!props.checked);
        }
      }

      return (
        <div className={getClassName("inline-block", props.className)}>
          <label className="flex justify-start items-start">
            <div
              className="bg-white border-2 rounded-lg border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              onclick={onClick}
            >
              <input type="checkbox" className="opacity-0 absolute" />
              {props.checked ? (
                <svg viewBox="-2 -2 24 24">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              ) : undefined}
            </div>
            <div className="select-none">{props.text ?? ""}</div>
          </label>
        </div>
      );
    },
  };
}
