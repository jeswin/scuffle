import { Note } from "../../types";
import { CSSProperties } from "forgo";

export default function NotesListItem(note: Note & { key: string }) {
  return {
    render() {
      return (
        <li className="flex-grow w-64 max-h-96 pt-4 pr-4 pb-12 pl-4 ml-8 mb-8 overflow-hidden border border-gray-200 rounded-md shadow-lg">
          {note.title ? (
            <h3 className="font-bold mb-2">{note.title}</h3>
          ) : undefined}
          <article className="text-sm">{note.text}</article>
        </li>
      );
    },
  };
}
