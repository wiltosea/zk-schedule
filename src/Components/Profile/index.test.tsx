import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '.';

test('renders learn react link', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/reviews/i);
  const titleProfile = screen.getByTestId('titleProfile');
  const profilePicture = screen.getByTestId('profilePicture');
  expect(linkElement).toBeInTheDocument();
  expect(titleProfile).toBeInTheDocument();
  expect(profilePicture).toBeInTheDocument();
});
