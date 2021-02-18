import AddNote from "./EditNote";
import NotesList from "./NotesList";

export default function NotesHome() {
  return {
    render() {
      return (
        <>
          <AddNote mode={"collapsed"} />
          <NotesList />
        </>
      );
    },
  };
}
