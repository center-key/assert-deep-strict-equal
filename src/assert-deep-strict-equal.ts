// assert-deep-strict-equal ~ MIT License

import { deepStrictEqual } from 'assert';
import { EOL } from 'node:os';
import fs from 'fs';

const assertDeepStrictEqual = (actual: unknown, expected: unknown, done?: (e?: unknown) => void): void => {
   // Checks that two values or serializable objects are identical.  The optional callback
   // supports asynchronous specification suites and doesn't timeout on assertion failures.
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
   return fs.readFileSync(filename, 'utf-8').replace(/\r/g, '').trim().split('\n');
   }

const fixEolGitDiff = (filename: string) => {
   // Handy utility to force a text file's line endings to be platform specific.
   const platformEol = (text: string) => text.replace(/\r?\n/g, EOL);
   fs.writeFileSync(filename, platformEol(fs.readFileSync(filename, 'utf-8')));
   }

export { assertDeepStrictEqual, fileToLines, fixEolGitDiff };
