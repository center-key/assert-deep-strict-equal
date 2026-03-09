// assert-deep-strict-equal
// Function fileToLines() Specification Suite

// Imports
import { assertDeepStrictEqual, fileToLines } from '../dist/assert-deep-strict-equal.js';

////////////////////////////////////////////////////////////////////////////////
describe('Utility function fileToLines()', () => {

   it('correctly reads a text file into an array of strings', () => {
      const actual = fileToLines('build/assert-deep-strict-equal.d.ts');
      const expected = [
         'declare const assertDeepStrictEqual: (actual: unknown, expected: unknown, done?: (e?: unknown) => void) => void;',
         'declare const fileToLines: (filename: string) => string[];',
         'declare const fixEolGitDiff: (filename: string) => void;',
         'export { assertDeepStrictEqual, fileToLines, fixEolGitDiff };',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });
