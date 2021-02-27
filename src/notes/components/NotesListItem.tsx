import { Note } from "../../types";
import { iconsDefault as icons } from "../../icons";
import Tag from "../../components/Tag";

export type NotesListItemProps = {
  note: Note;
  key: string;
  summarize: boolean;
};

export default function NotesListItem(props: NotesListItemProps) {
  return {
    render() {
      return !props.summarize ? (
        <li className="flex-grow w-64 max-w-2xl max-h-96 pt-4 pr-4 pb-12 pl-4 ml-8 mb-8 overflow-hidden border border-gray-200 rounded-md shadow-lg">
          {props.note.title ? (
            <h3 className="font-bold mb-2">{props.note.title}</h3>
          ) : undefined}
          <article className="text-sm">{props.note.text}</article>
        </li>
      ) : (
        <li className="mt-2 mb-4 last:mb-0 max-w-md flex">
          <div className="min-w-6 pt-0.5">{icons.notes}</div>
          <div className="text-sm">
            {`${props.note.title ? props.note.title + ": " : ""}${
              props.note.text.trim().length > 200
                ? `${props.note.text.trim().substr(0, 200).trim()}...`
                : props.note.text.trim()
            }`}
            {props.note.tags ? (
              <div className="mt-1">
                {props.note.tags.map((x) => (
                  <Tag tag={x} />
                ))}
              </div>
            ) : undefined}
          </div>
        </li>
      );
    },
  };
}
