// assert-deep-strict-equal
// Mocha Specification Cases

// Imports
import assert from 'assert';

// Setup
import { assertDeepStrictEqual } from '../dist/assert-deep-strict-equal.js';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Module export', () => {

   it('is a function', () => {
      const actual =   { type: assertDeepStrictEqual.constructor.name };
      const expected = { type: 'Function' };
      assert.deepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Identical objects', () => {

   it('pass assertDeepStrictEqual() without exception thrown', () => {
      const actual =   { x: 3, y: 7, z: 21 };
      const expected = { x: 3, y: 7, z: 21 };
      assertDeepStrictEqual(actual, expected);
      assert.deepStrictEqual(actual, expected);
      });

   });
