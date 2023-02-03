import * as notesService from "../../../services/notes/index.js";
import randomId from "../../../lib/randomId.js";
import state from "../state";
import { Note } from "../../../types/index.js";

export async function loadNotes(): Promise<void> {
  const notes = await notesService.getAllNotes();
  state.notes = notes;
}

export async function addNote(title: string, text: string): Promise<void> {
  const note = {
    id: randomId(),
    type: "note" as "note",
    title,
    text,
    createdAt: Date.now(),
  };
  await notesService.saveNote(note);
  state.notes = state.notes.concat(note);
}

export async function deleteNote(id: string): Promise<void> {
  await notesService.deleteNote(id);
  state.notes = state.notes.filter((x) => x.id !== id);
}

export async function updateNote(note: Note): Promise<void> {
  await notesService.updateNote(note);
  state.notes = state.notes.map((x) => (x.id !== note.id ? x : note));
}
