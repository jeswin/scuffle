import { bindToStateProps } from "forgo-state/dist";
import { loadNotes } from "../actions";
import NotesListItem from "./NotesListItem";
import state from "../state";

export default function NotesList() {
  loadNotes();

  const component = {
    render() {
      return (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {state.notes?.map((note) => (
            <NotesListItem key={note.id} {...note} />
          ))}
        </ul>
      );
    },
  };

  return bindToStateProps([[state, (x) => [state.notes]]], component);
}
