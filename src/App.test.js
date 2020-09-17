import React from 'react';
//import { render } from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/react'

test('Shows Hello, World!', () => {
  render(<App />);
  expect(screen.getByText('My To Do List')).toBeInTheDocument()
})
