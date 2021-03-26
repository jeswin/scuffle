import { ForgoRenderArgs } from "forgo";
import * as forgo from "forgo";

export type EditableTextProps = {
  text: string;
};

export default function EditableText(initialProps: EditableTextProps) {
  let isEditing = false;

  return {
    render(props: EditableTextProps, { update }: ForgoRenderArgs) {
      return !isEditing ? (
        <span>{props.text}</span>
      ) : (
        <input type="text" defaultValue={props.text} />
      );
    },
  };
}
