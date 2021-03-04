import { ForgoRenderArgs } from "forgo";

export type EditableTextProps = {
  text: string;
};

export default function EditableText(initialProps: EditableTextProps) {
  let isEditing = false;

  return {
    render(props: EditableTextProps, args: ForgoRenderArgs) {
      return !isEditing ? (
        <span>{props.text}</span>
      ) : (
        <input type="text" defaultValue={props.text} />
      );
    },
  };
}
