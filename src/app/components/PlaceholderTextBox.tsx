import { ForgoComponent, ForgoRef, ForgoRenderArgs } from "forgo";

export type BigTextBoxProps = {
  onClick: () => void;
  icon: ForgoComponent<any>;
  ref: ForgoRef<HTMLInputElement>;
  placeholder: string;
};
export default function BigTextBox(initialProps: BigTextBoxProps) {
  return {
    render(props: BigTextBoxProps, args: ForgoRenderArgs) {
      return (
        <div
          onclick={props.onClick}
          className="p-3 mb-8 rounded-md border border-gray-400 max-w-3xl flex"
        >
          <span className="pt-1">{props.icon}</span>
          <input
            type="text"
            className="focus:outline-none ml-4 resize-none"
            key="note_contents_placeholder"
            ref={props.ref}
            onfocus={props.onClick}
            onclick={props.onClick}
            oncontextmenu={props.onClick}
            onkeypress={props.onClick}
            placeholder={props.placeholder}
          />
        </div>
      );
    },
  };
}
