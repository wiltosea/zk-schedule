import React from 'react';
import { render, screen } from '@testing-library/react';
import Schedule from '.';

test('renders schedule Header', () => {
  render(<Schedule />);
  const headerComponent = screen.getByText(/Schedule your session/i);
  expect(headerComponent).toBeInTheDocument();
});

test('renders Table', () => {
  render(<Schedule />);
  const table = screen.getByTestId('schedule-table');
  const thead = screen.getByTestId('thead');
  const tbody = screen.getByTestId('tbody');
  expect(table).toBeInTheDocument();
  expect(thead).toBeInTheDocument();
  expect(tbody).toBeInTheDocument();
});
