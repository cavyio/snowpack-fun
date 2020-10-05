import path from 'path';
import { loadFeature, defineFeature } from 'jest-cucumber';
import * as React from 'react';
import { firefox, chromium, ElementHandle } from 'playwright';
import { getDocument, queries } from 'playwright-testing-library';
import type { Browser } from 'playwright/types/types';

const TEST_URL = 'http://localhost:8080';

const feature = loadFeature(path.join(__dirname, '/App.feature'));

defineFeature(feature, (test) => {
  let browser: Browser;

  afterEach(async () => {
    if (browser.isConnected()) {
      await browser.close();
    }
  });

  // @ts-ignore
  test('A user enters "rolandquast" into the username field', ({ given, and, when, then }) => {
    let $document: any, page: any;
    const { getByLabelText } = queries;

    given(/^A user is at the form input page using (.*)$/, async (browserName) => {
      switch (browserName) {
        case 'firefox':
          browser = await firefox.launch({ headless: false, slowMo: 50 });
          break;
        default:
          browser = await chromium.launch({ headless: false, slowMo: 50 });
      }

      page = await browser.newPage();
      await page.goto(TEST_URL);
      $document = await getDocument(page);
    });

    when('A user enters "rolandquast" into the username field', async () => {
      const $username = await getByLabelText($document, 'Username');
      await $username.type('rolandquast');
    });

    then('The username field should contain the value "rolandquast"', async () => {
      const $username: ElementHandle = await getByLabelText($document, 'Username');
      expect(await page.evaluate((el: { value: any; }) => el.value, $username)).toEqual('rolandquast');
    });
  });
});