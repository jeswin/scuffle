import { ForgoRenderArgs, rerender } from "forgo";

export type CheckboxProps = {
  text?: string;
  checked?: boolean;
  className?: string;
};

export default function Checkbox(props: CheckboxProps) {
  let checked = props.checked ?? false;
  return {
    render(props: CheckboxProps, args: ForgoRenderArgs) {
      function onClick() {
        checked = !checked;
        rerender(args.element);
      }

      return (
        <div className={`inline-block ${props.className ?? ""}`}>
          <label className="flex justify-start items-start">
            <div className="bg-white border-2 rounded-lg border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500" onclick={onClick}>
              <input type="checkbox" className="opacity-0 absolute" />
              {checked ? (
                <svg
                  className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="-2 -2 24 24"
                >
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
