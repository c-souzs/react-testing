import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notes from '.';

const notesRender = () => render(<Notes />);

describe('Notes component', () => {
    it('should update the value of the input', () => {
        notesRender();

        const inputNote = screen.getByPlaceholderText("Ex: Estudar react");

        userEvent.type(inputNote, "Estudar jest");
        
        expect(inputNote).toHaveValue("Estudar jest");
    });

    it('should render new note list', async () => {
        notesRender();

        const inputNote = screen.getByPlaceholderText("Ex: Estudar react");
        const buttonAddNote = screen.getByText("Anotar");

        userEvent.type(inputNote, "Estudar jest");
        userEvent.click(buttonAddNote);
        
        const noteAdd = await screen.findByText("4- Estudar jest");
        const titleNew = await screen.findByText("Anotações - 4");
        
        expect(noteAdd).toBeInTheDocument();
        expect(titleNew).toBeInTheDocument();
    });

    it('should remove all note list', async () => {
        notesRender();

        const buttonRemoveAllNotes = screen.getByText("Limpar anotações");
        userEvent.click(buttonRemoveAllNotes);
        
        await waitForElementToBeRemoved(() => screen.queryAllByTestId("note-item"));
        await waitFor(() => {
            const messageEmptyNotes = screen.getByText("Não há anotações no momento.");

            expect(messageEmptyNotes).toBeInTheDocument();
        })
    });
});