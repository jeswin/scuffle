import * as forgo from "forgo";
import EditNote from "./AddNote";
import NotesList from "./NotesList";

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
