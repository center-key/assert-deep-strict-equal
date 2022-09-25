# assert-deep-strict-equal
<img src=https://centerkey.com/graphics/center-key-logo.svg align=right width=200 alt=logo>

_Asynchronous assert fails in Mocha you can see and don't timeout (written in TypeScript)_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/assert-deep-strict-equal/blob/main/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/assert-deep-strict-equal.svg)](https://www.npmjs.com/package/assert-deep-strict-equal)
[![Vulnerabilities](https://snyk.io/test/github/center-key/assert-deep-strict-equal/badge.svg)](https://snyk.io/test/github/center-key/assert-deep-strict-equal)
[![Build](https://github.com/center-key/assert-deep-strict-equal/workflows/build/badge.svg)](https://github.com/center-key/assert-deep-strict-equal/actions/workflows/run-spec-on-push.yaml)

## A) Setup
Install package for node:
```shell
$ npm install --save-dev assert-deep-strict-equal
```
Import into your Mocha spec file:
```javascript
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
```

## B) Usage
```javascript
const actual =   { x: 3, y: 7, z: 21 };
const expected = { x: 3, y: 7, z: 21 };
assertDeepStrictEqual(actual, expected, done);
```
The third parameter for the `done` callback is optional:
```javascript
assertDeepStrictEqual(actual, expected);  //synchronous test case
```

## C) Example
```javascript
describe('Star Wars API result for spaceship #3', () => {

   it('is a Star Destroyer', (done) => {
      const url = 'https://swapi.py4e.com/api/starships/3/';
      const handleData = (data) => {
         const actual = {
            name:         data.name,
            model:        data.model,
            manufacturer: data.manufacturer,
            };
         const expected = {
            name:         'Star Destroyer',
            model:        'Imperial I-class Star Destroyer',
            manufacturer: 'Kuat Drive Yards',
            };
         assertDeepStrictEqual(actual, expected, done);
         };
      fetchJson.get(url, { format: 'json' }).then(handleData);
      });

   });
```
Commands to run the above **Star Destroyer** example and others in [examples.spec.js](examples.spec.js):
```shell
$ cd assert-deep-strict-equal
$ npm install
$ npm run examples
```
<img src=https://raw.githubusercontent.com/center-key/assert-deep-strict-equal/main/examples.png
width=800 alt=screenshot>
Note that the assertion failure does _not_ cause a timeout and the test case error is easy to see and interpret.&nbsp;
The value of the `name` field is `"BOGUS!"` (red), but it was expected to be `"payapa-berry"` (green).

<br>

---
[MIT License](LICENSE.txt)
