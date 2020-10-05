import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders with RTL', async () => {
  render(<App />);
  const $username = await screen.getByLabelText('Username');
  fireEvent.focus($username);
  fireEvent.change($username, { target: { value: 'rolandquast' } });
  expect($username).toHaveValue('rolandquast');
});
