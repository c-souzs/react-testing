import React from "react";
import Create from "./Create";
import List, { Note } from "./List";

export const initialList: Note[] = [
    {
        id: 1,
        description: 'Estudar react'
    },
    {
        id: 2,
        description: 'Estuar nextJs'
    },
    {
        id: 3,
        description: 'Estudar nodeJs'
    }
]

const Notes = () => {
    const [notes, setNotes] = React.useState(initialList);

    const removeFromNotes = (idRemove: number) => {
        const notesFilter = notes.filter(({id}) => id !== idRemove);

        setNotes(notesFilter);
    }

    const removeAllNotes = () => setNotes([]);

    return(
        <div>
            <div>
                <h1>Anotações - {notes.length}</h1>
                {notes.length ? <List notes={notes} removeFromNotes={removeFromNotes}/> : <p>Não há anotações no momento.</p>}
                <Create 
                    notes={notes}
                    setNotes={setNotes}
                />
                <button onClick={() => removeAllNotes()}>Limpar anotações</button>
            </div>
        </div>
    )
}

export default Notes;