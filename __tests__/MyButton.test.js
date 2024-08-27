import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import MyButton from '../MyButton';

beforeEach(() => 
{
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => 
{
  jest.restoreAllMocks();
});

test('renders button with correct label', () => 
{
  const { getByText } = render(<MyButton label="Click Me" />);
  expect(getByText(/Click Me/i)).toBeInTheDocument();
});
