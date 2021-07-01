//! assert-deep-strict-equal v0.0.3 ~ github.com/center-key/assert-deep-strict-equal ~ MIT License

(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "assert"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertDeepStrictEqual = void 0;
    const assert_1 = require("assert");
    const assertDeepStrictEqual = (actual, expected, done) => {
        const toPlainObj = (obj) => JSON.parse(JSON.stringify(obj));
        try {
            assert_1.deepStrictEqual(toPlainObj(actual), toPlainObj(expected));
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
    exports.assertDeepStrictEqual = assertDeepStrictEqual;
});
