import type { Note } from '../types';

const STORAGE_KEY = 'cardnotes_data';

export const getNotes = (): Note[] => {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
};

export const getNote = (id: string): Note => {
    const notes = getNotes();
    const note = notes.find((note) => note.id === id);
    if (!note) {
        throw new Error(`Note with id ${id} not found`);
    }
    return note;
}

export const saveNote = (note: Omit<Note, 'id' | 'createdAt'>): Note => {
    const notes = getNotes();
    const newNote: Note = {
        ...note,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...notes, newNote]));
    return newNote;
}