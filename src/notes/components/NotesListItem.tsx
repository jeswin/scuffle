import { Note } from "../../types";
import { iconsDefault as icons } from "../../icons";

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
        <li className="text-sm py-1 flex align-middle items-center">
          {icons.notes}

          <a
            href={`/notes/${props.note.id}`}
            className="ml-3 text-sm hover:underline"
          >
            {`${props.note.title ? props.note.title + ": " : ""}${
              props.note.text.trim().length > 50
                ? `${props.note.text.trim().substr(0, 50).trim()}...`
                : props.note.text.trim()
            }`}
          </a>
        </li>
      );
    },
  };
}
