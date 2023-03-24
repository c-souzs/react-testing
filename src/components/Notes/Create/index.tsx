import React, { FormEvent } from "react";
import { Note } from "../List";

export type CreateProps = {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Create = ({ notes, setNotes }: CreateProps) => {
    const [newNote, setNewNote] = React.useState('');

    const handleCreateNote = (e: FormEvent) => {
        e.preventDefault();

        const dataNote = {
            id: !notes.length ? 1 : notes[notes.length - 1].id + 1,
            description: newNote
        }

        setNotes([...notes, dataNote]);
        setNewNote('');
    }

    return(
        <form onSubmit={handleCreateNote}>
            <input 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Ex: Estudar react"
            />
            <button>Anotar</button>
        </form>
    )
}

export default Create;