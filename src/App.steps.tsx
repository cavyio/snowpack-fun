import path from 'path';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature(path.join(__dirname, '/App.feature'));

defineFeature(feature, (test) => {

  beforeEach(() => {
  });

  // @ts-ignore
  test('A user enters "rolandquast" into the username field', ({ given, and, when, then }) => {
    given('A user is at the form input page', () => {
    });

    when('A user enters "rolandquast" into the username field', () => {
    });

    then('The username field should contain the value "rolandquast"', () => {
    });
  });
});