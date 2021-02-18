import EditNote from "./EditNote";
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
