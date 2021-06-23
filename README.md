# assert-deep-strict-equal
<img src=https://centerkey.com/graphics/center-key-logo.svg align=right width=200 alt=logo>

_Async assert fails in Mocha you can see and don't timeout (written in TypeScript)_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/assert-deep-strict-equal/blob/main/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/assert-deep-strict-equal.svg)](https://www.npmjs.com/package/assert-deep-strict-equal)
[![Vulnerabilities](https://snyk.io/test/github/center-key/assert-deep-strict-equal/badge.svg)](https://snyk.io/test/github/center-key/assert-deep-strict-equal)
[![Build](https://github.com/center-key/assert-deep-strict-equal/workflows/build/badge.svg)](https://github.com/center-key/assert-deep-strict-equal/actions?query=workflow%3Abuild)

## 1) Setup
Install package for node:
```shell
$ npm install --save-dev assert-deep-strict-equal
```
Import into your Mocha spec file:
```javascript
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
```

## 2) Usage
```javascript
const actual =   { x: 3, y: 7, z: 21 };
const expected = { x: 3, y: 7, z: 21 };
assertDeepStrictEqual(actual, expected, done);
```
