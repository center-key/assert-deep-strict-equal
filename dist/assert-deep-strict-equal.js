//! assert-deep-strict-equal v0.0.2 ~ github.com/center-key/assert-deep-strict-equal ~ MIT License

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
export { assertDeepStrictEqual };