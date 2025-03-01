// assert-deep-strict-equal ~ MIT License

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

export { assertDeepStrictEqual };
