// assert-deep-strict-equal
// Package Specification Suite

// Imports
import { assertDeepStrictEqual } from '../dist/assert-deep-strict-equal.js';
import assert from 'assert';
import fs from 'fs';

////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual = fs.readdirSync('dist').sort();
      const expected = [
         'assert-deep-strict-equal.d.ts',
         'assert-deep-strict-equal.js',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////
describe('Module export', () => {

   it('is a function', () => {
      const actual =   { type: assertDeepStrictEqual.constructor.name };
      const expected = { type: 'Function' };
      assert.deepStrictEqual(actual, expected);
      });

   });
