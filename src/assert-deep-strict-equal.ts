// assert-deep-strict-equal ~ MIT License

import fs from 'fs';

import { deepStrictEqual } from 'assert';

const assertDeepStrictEqual = (actual: unknown, expected: unknown, done?: (e?: unknown) => void): void => {
   const toPlainObj = (obj: unknown): unknown => JSON.parse(JSON.stringify(obj));
   try {
      deepStrictEqual(toPlainObj(actual), toPlainObj(expected));
      if (done)
         done();
      }
   catch (error) {
      if (done)
         done(error);
      else
         throw error;
      }
   };

const fileToLines = (filename: string) => {
   // Handy utility to read a text file into an array of strings for verifying contents.
   const windowsEol = /\r\n/g;
   return fs.readFileSync(filename, 'utf-8').trim().replace(windowsEol, '\n').split('\n');
   }

export { assertDeepStrictEqual, fileToLines };
