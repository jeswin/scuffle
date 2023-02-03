import * as forgo from "forgo";
import EditNote from "./AddNote.js";
import NotesList from "./NotesList.js";

export default function NotesHome() {
  return {
    render() {
      return (
        <>
          <EditNote mode={"collapsed"} />
          <NotesList />
        </>
      );
    },
  };
}
