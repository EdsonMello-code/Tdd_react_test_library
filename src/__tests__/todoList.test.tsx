import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../pages/TodoList';

const defaultValue = 'vazio';
const placeholderTodo = 'Digite algo';

describe('Todo list', () => {
  it('Should return input with placeholder Digite algo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(placeholderTodo);

    expect(input).toBeInTheDocument();
  });

  it('Should has in component TodoList, button with name Click and onClick proprety.', () => {
    render(<TodoList />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Should has a list with li', async () => {
    render(<TodoList />);

    const button = screen.getByText('Click');

    const input = await screen.findByPlaceholderText('Digite algo');

    fireEvent.click(button);

    const firstItem = await screen.findByRole('listitem');

    firstItem.innerText = defaultValue;

    expect(firstItem).toHaveTextContent(defaultValue);
    expect(input).toBeInTheDocument();
  });
});
