import { bindToStateProps } from "forgo-state";
import { loadNotes } from "../actions";
import NotesListItem from "./NotesListItem";
import state from "../state";

export default function NotesList() {
  loadNotes();

  const component = {
    render() {
      return (
        <ul className="flex flex-wrap items-start -ml-8">
          {state.notes?.map((note) => (
            <NotesListItem key={note.id} {...note} />
          ))}
        </ul>
      );
    },
  };

  return bindToStateProps([[state, (x) => [state.notes]]], component);
}
