import { bindToStateProps } from "forgo-state";
import { loadNotes } from "../actions";
import NotesListItem from "./NotesListItem";
import state from "../state";
import groupEntitiesByTime from "../../modules/groupEntitiesByTime";
import { iconsDefault as icons } from "../../icons";

export default function NotesList() {
  loadNotes();

  const component = {
    render() {
      const notes = groupEntitiesByTime(state.notes);
      return (
        <div>
          {Array.from(notes.entries()).map(([timeString, items]) => (
            <div>
              <div className="flex pb-4 items-center">
                {icons.access_time}
                <h2 className="pl-2 font-bold text-sm">{timeString}</h2>
              </div>
              <ul className="flex flex-wrap items-start -ml-8">
                {items.map((note) => (
                  <NotesListItem key={note.id} note={note} summarize={false} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
  };

  return bindToStateProps([[state, (x) => [state.notes]]], component);
}
