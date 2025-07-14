//! assert-deep-strict-equal v1.2.5 ~~ https://github.com/center-key/assert-deep-strict-equal ~~ MIT License

declare const assertDeepStrictEqual: (actual: unknown, expected: unknown, done?: (e?: unknown) => void) => void;
declare const fileToLines: (filename: string) => string[];
declare const fixEolGitDiff: (filename: string) => void;
export { assertDeepStrictEqual, fileToLines, fixEolGitDiff };
