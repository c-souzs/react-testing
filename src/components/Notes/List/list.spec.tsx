import { render, screen } from '@testing-library/react';
import List, { ListProps } from '.';
import { initialList } from '..';

// Renderiza o componente com as propriedades padrão ou sobrescreve com novas propriedades
const renderList = ({ notes = initialList, removeFromNotes = jest.fn() }: Partial<ListProps>) => render(<List notes={notes} removeFromNotes={removeFromNotes} />);

describe('List', () => {
    it('renders a list of notes', () => {
        renderList({});

        const noteItems = screen.getAllByTestId('note-item');

        expect(noteItems.length).toBe(initialList.length);
    });

    // it('should call removeFromNotes when delete button is clicked', async () => {
    //     const removeFromNotesMock = jest.fn();
    //     renderList({removeFromNotes: removeFromNotesMock});

    //     const buttonsDeleteNotes = screen.getAllByText("Deletar");

    //     userEvent.click(buttonsDeleteNotes[0]);

    //     expect(removeFromNotesMock).toHaveBeenCalledTimes(1);
    // }); 
});
