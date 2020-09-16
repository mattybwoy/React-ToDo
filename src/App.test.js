import React from 'react';
//import { render } from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/react'


{/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */}

test('Shows Hello, World!', () => {
  render(<App />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})
