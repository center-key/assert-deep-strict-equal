//! assert-deep-strict-equal v1.2.5 ~~ https://github.com/center-key/assert-deep-strict-equal ~~ MIT License

import { deepStrictEqual } from 'assert';
import { EOL } from 'node:os';
import fs from 'fs';
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
const fixEolGitDiff = (filename) => {
    const platformEol = (text) => text.replace(/\r?\n/g, EOL);
    fs.writeFileSync(filename, platformEol(fs.readFileSync(filename, 'utf-8')));
};
export { assertDeepStrictEqual, fileToLines, fixEolGitDiff };
