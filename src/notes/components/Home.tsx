import AddNote from "./AddNote";
import NotesList from "./NotesList";

export default function NotesHome() {
  return {
    render() {
      return (
        <>
          <AddNote collapsed={true} style={{ marginBottom: "1em" }} />
          <NotesList />
        </>
      );
    },
  };
}
