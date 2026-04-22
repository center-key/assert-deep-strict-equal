//! assert-deep-strict-equal v1.2.7 ~~ https://github.com/center-key/assert-deep-strict-equal ~~ MIT License

import { deepStrictEqual } from 'node:assert';
import os from 'node:os';
import fs from 'node:fs';
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
    return fs.readFileSync(filename, 'utf-8').replace(/\r/g, '').trim().split('\n');
};
const fixEolGitDiff = (filename) => {
    const platformEol = (text) => text.replace(/\r?\n/g, os.EOL);
    fs.writeFileSync(filename, platformEol(fs.readFileSync(filename, 'utf-8')));
};
export { assertDeepStrictEqual, fileToLines, fixEolGitDiff };
