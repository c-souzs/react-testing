import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Create, { CreateProps } from '.';
import { initialList } from '..';

const notesMock = [...initialList];

const notesRender = ({ notes = notesMock, setNotes = jest.fn() }: Partial<CreateProps>) => render(<Create notes={notes} setNotes={setNotes} />);

describe('Create Note Component', () => {
    it('should render the form correctly', () => {
        notesRender({});

        const input = screen.getByPlaceholderText("Ex: Estudar react");
        const button = screen.getByText("Anotar");
        
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('should update the value of the input', async () => {
        notesRender({});

        const input = await screen.findByPlaceholderText("Ex: Estudar react");

        userEvent.type(input, "Estudar jest");
        
        expect(input).toHaveValue("Estudar jest");
    });
});