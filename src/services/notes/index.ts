import { Note } from "../../types/index.js";
import * as data from "./dummyNotes.js";

let notes = data.notes;

export async function getAllNotes(): Promise<Note[]> {
  return [...notes];
}

export async function saveNote(note: Note): Promise<void> {
  notes = notes.concat(note);
}

export async function deleteNote(noteId: string): Promise<void> {
  notes = notes.filter((x) => x.id !== noteId);
}

export async function getItemsByTags(tags: string[]): Promise<Note[]> {
  return notes.filter(
    (b) => b.tags && b.tags.some((tag) => tags.includes(tag))
  );
}

export async function updateNote(note: Note): Promise<Note[]> {
  return notes.map((x) => (x.id !== note.id ? x : note));
}
