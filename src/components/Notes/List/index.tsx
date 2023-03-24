export type Note = {
    id: number;
    description: string;
}

export type ListProps = {
    notes: Note[];
    removeFromNotes: (id: number) => void;
}

const List = ({ notes, removeFromNotes }: ListProps) => {
    return(
        <ul>
            {notes.map(({id, description}) => (
                <li key={`note-${id}`} data-testid="note-item">
                    {id}- {description}

                    <button onClick={() => removeFromNotes(id)}>Deletar</button>
                </li>
            ))}
        </ul>
    )
}

export default List;