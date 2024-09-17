
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddContact from './AddContact';


const mockNavigate = jest.fn();

describe('AddContact Component', () => {
  beforeEach(() => {
   
    mockNavigate.mockClear();
  });

  test('renders form elements and allows form submission', () => {

    render(<AddContact onAdd={() => {}} navigate={mockNavigate} />);

 
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address:/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Contact/i)).toBeInTheDocument();

  
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone:/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Address:/i), { target: { value: '123 Elm St' } });

   
    fireEvent.click(screen.getByText(/Add Contact/i));

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
