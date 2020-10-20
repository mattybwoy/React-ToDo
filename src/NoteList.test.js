import React from 'react';
import '@testing-library/jest-dom'
import { getAllByTitle, render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import App from './App';
import NoteList from './NoteList'


test('renders correctly when there are no notes', () => {
  const tree = renderer.create(<NoteList />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Show remaining tasks', () => {
  render(<App /> );
  expect(screen.getByText('You have 0 Tasks Remaining')).toBeInTheDocument()
});

test('user can add a task', () => {
  render(<NoteList /> );
  const textBox = screen.getByRole('textbox');
  userEvent.type(textBox, 'A task')
  userEvent.click(screen.getByText('Add'))
  const note = screen.getByText('A task');

  expect(note).toBeInTheDocument();
});

test('user can delete a task', () => {
  render (<NoteList />);
  const textBox = screen.getByRole('textbox');
  userEvent.type(textBox, 'A Task')
  userEvent.click(screen.getByText('Add'))
  const note = screen.getAllByText('A Task')
  userEvent.click(screen.getByTitle('deletion'))

  expect(screen.getByText('You have 0 Tasks Remaining')).toBeInTheDocument()
})

test('user see checkbox next to todo', () => {
  render(<NoteList />);
  const textBox = screen.getByRole('textbox');
  userEvent.type(textBox, 'A task')
  userEvent.click(screen.getByText('Add'))
  const note = screen.getByText('A task');
  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).toBeInTheDocument();
})

test('user can reset todo list', () => {
render(<NoteList />);
  const textBox = screen.getByRole('textbox');
  userEvent.type(textBox, "A task")
  userEvent.click(screen.getByText('Add'))
  const note = screen.getByText('A task');
  userEvent.click(screen.getByText('Reset'))

  expect(note).not.toBeInTheDocument();
});

