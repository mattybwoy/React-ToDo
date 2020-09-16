import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import App from './App';
import NoteList from './NoteList'

test('renders correctly when there are no notes', () => {
  const tree = renderer.create(<NoteList />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Personal NoteList', () => {
  render(<App /> );
  expect(screen.getByText('Personal NoteList')).toBeInTheDocument()
})

test('user can add a note', () => {
  render(<NoteList /> );
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A task")
  userEvent.click(screen.getByText('Submit'))
  const note = screen.getByText("A task");

  expect(note).toBeInTheDocument();
})

test('user see checkbox next to todo', () => {
  render(<NoteList />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A task")
  userEvent.click(screen.getByText('Submit'))
  const note = screen.getByText("A task");
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).toBeInTheDocument();
})

test('user can reset todo list', () => {
render(<NoteList />);
  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A task")
  userEvent.click(screen.getByText('Submit'))
  const note = screen.getByText("A task");
  userEvent.click(screen.getByText('Reset'))
  expect(note).not.toBeInTheDocument();
})

