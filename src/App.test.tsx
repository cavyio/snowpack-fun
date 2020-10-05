import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { firefox, chromium } from 'playwright';
import { getDocument, queries } from 'playwright-testing-library';
import App from './App';

const TEST_URL = 'http://localhost:8080';

test('renders with RTL', async () => {
  render(<App />);
  const $username = await screen.getByLabelText('Username');
  fireEvent.focus($username);
  fireEvent.change($username, { target: { value: 'rolandquast' } });
  expect($username).toHaveValue('rolandquast');
});

test('renders in chrome', async () => {
  const { getByLabelText } = queries;
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto(TEST_URL);
  const $document = await getDocument(page);
  const $form = await getByLabelText($document, 'Username');
  await $form.type('rolandquast');
  await browser.close();
});

test('renders firefox', async () => {
  const { getByLabelText } = queries;
  const browser = await firefox.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto(TEST_URL);
  const $document = await getDocument(page);
  const $form = await getByLabelText($document, 'Username');
  await $form.type('rolandquast');
  await browser.close();
});
