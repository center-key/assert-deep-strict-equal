// assert-deep-strict-equal
// Mocha Specification Suite

// Imports
import assert from 'assert';
import { fetchJson } from 'fetch-json';
import { assertDeepStrictEqual } from '../dist/assert-deep-strict-equal.js';  //replace with: ...from 'assert-deep-strict-equal';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Module export', () => {

   it('is a function', () => {
      const actual =   { type: assertDeepStrictEqual.constructor.name };
      const expected = { type: 'Function' };
      assert.deepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Identical objects', () => {

   it('pass assertDeepStrictEqual() without an exception thrown', () => {
      const actual =   { x: 3, y: 7, z: 21 };
      const expected = { x: 3, y: 7, z: 21 };
      assertDeepStrictEqual(actual, expected);
      assert.deepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Fetching a berry from PokéAPI', () => {

   it('is rewarded with a tasty razz-berry', (done) => {
      const url = 'https://pokeapi.co/api/v2/berry/razz';
      const handleData = (data) => {
         const actual = {
            id:          data.id,
            name:        data.item.name,
            growth_time: data.growth_time,
            };
         const expected = {
            id:          16,
            name:        'razz-berry',
            growth_time: 2,
            };
         assertDeepStrictEqual(actual, expected, done);
         };
      fetchJson.get(url).then(handleData);
      });

   it('is rewarded with a sweet payapa berry', (done) => {
      const url = 'https://pokeapi.co/api/v2/berry/payapa';
      const handleData = (data) => {
         const actual = {
            id:          data.id,
            name:        data.item.name,
            growth_time: data.growth_time,
            };
         const expected = {
            id:          45,
            name:        'payapa-berry',
            growth_time: 18,
            };
         assertDeepStrictEqual(actual, expected, done);
         };
      fetchJson.get(url).then(handleData);
      });

   });
