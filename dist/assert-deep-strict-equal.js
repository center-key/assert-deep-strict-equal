//! assert-deep-strict-equal v1.2.4 ~~ https://github.com/center-key/assert-deep-strict-equal ~~ MIT License

import fs from 'fs';
import { deepStrictEqual } from 'assert';
const assertDeepStrictEqual = (actual, expected, done) => {
    const toPlainObj = (obj) => JSON.parse(JSON.stringify(obj));
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
const fileToLines = (filename) => {
    const windowsEol = /\r\n/g;
    return fs.readFileSync(filename, 'utf-8').trim().replace(windowsEol, '\n').split('\n');
};
export { assertDeepStrictEqual, fileToLines };
