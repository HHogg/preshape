import React from 'react';
import { shallow } from 'enzyme';
import Responsive from './Responsive';

describe('Responsive', () => {
  describe('match function', () => {
    const queryLower = '10rem';
    const queryMiddle = '20rem';
    const queryUpper = '30rem';
    const queries = [queryLower, queryMiddle, queryUpper];
    let instance;
    let match;

    const setMatches = (...matches) => {
      instance.listeners = queries.map((query, index) =>
        ({ query, matches: matches[index] }));
      instance.update();
    };

    beforeEach(() => {
      instance = shallow(
        <Responsive queries={ queries }>
          { () => {} }
        </Responsive>
      ).instance();

      match = instance.match.bind(instance);
    });

    describe('upper', () => {
      beforeEach(() => {
        setMatches(true, true, true);
      });

      test('string', () => {
        expect(match(queryLower)).toBe(true);
        expect(match(queryMiddle)).toBe(true);
        expect(match(queryUpper)).toBe(true);
      });

      test('object', () => {
        expect(match({
          [queryLower]: 1,
        })).toBe(1);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
        })).toBe(2);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
          [queryUpper]: 3,
        })).toBe(3);
      });
    });

    describe('middle', () => {
      beforeEach(() => {
        setMatches(true, true, false);
      });

      test('string', () => {
        expect(match(queryLower)).toBe(true);
        expect(match(queryMiddle)).toBe(true);
        expect(match(queryUpper)).toBe(false);
      });

      test('object', () => {
        expect(match({
          [queryLower]: 1,
        })).toBe(1);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
        })).toBe(2);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
          [queryUpper]: 3,
        })).toBe(2);
      });
    });

    describe('lower', () => {
      beforeEach(() => {
        setMatches(true, false, false);
      });

      test('string', () => {
        expect(match(queryLower)).toBe(true);
        expect(match(queryMiddle)).toBe(false);
        expect(match(queryUpper)).toBe(false);
      });

      test('object', () => {
        expect(match({
          [queryLower]: 1,
        })).toBe(1);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
        })).toBe(1);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
          [queryUpper]: 3,
        })).toBe(1);
      });
    });

    describe('none', () => {
      beforeEach(() => {
        setMatches(false, false, false);
      });

      test('string', () => {
        expect(match(queryLower)).toBe(false);
        expect(match(queryMiddle)).toBe(false);
        expect(match(queryUpper)).toBe(false);
      });

      test('object', () => {
        expect(match({
          [queryLower]: 1,
        })).toBe(false);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
        })).toBe(false);

        expect(match({
          [queryLower]: 1,
          [queryMiddle]: 2,
          [queryUpper]: 3,
        })).toBe(false);
      });
    });
  });
});
