import * as forgo from "forgo";
import { bindToStateProps } from "forgo-state";
import { loadNotes } from "../actions/index.js";
import NotesListItem from "./NotesListItem.js";
import state from "../state.js";
import groupEntitiesByDate from "../../../utils/groupEntitiesByDate.js";
import { iconsDefault as icons } from "../../../icons/index.js";

export default function NotesList() {
  loadNotes();

  const component = {
    render() {
      const notes = groupEntitiesByDate([[state.notes, (x) => x.createdAt]]);
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
