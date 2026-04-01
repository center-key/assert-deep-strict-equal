// assert-deep-strict-equal
// Function deepStrictEqual() Specification Suite

// Imports
import { assertDeepStrictEqual } from '../dist/assert-deep-strict-equal.js';
import { fetchJson } from 'fetch-json';
import assert from 'node:assert';

////////////////////////////////////////////////////////////////////////////////
describe('Identical objects', () => {

   it('pass assertDeepStrictEqual() without an exception thrown', () => {
      const actual =   { x: 3, y: 7, z: 21 };
      const expected = { x: 3, y: 7, z: 21 };
      assertDeepStrictEqual(actual, expected);
      assert.deepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////
describe('Nobel Prize API result for laureate #26', () => {

   it('is Albert Einstein', (done) => {
      const url =    'https://api.nobelprize.org/2.0/laureates';
      const params = { ID: 26 };
      const handleData = (data) => {
         const laureate = data.laureates[0];
         const actual = {
            id:    laureate.id,
            name:  laureate.fullName.en,
            birth: laureate.birth.date,
            };
         const expected = {
            id:    '26',
            name:  'Albert Einstein',
            birth: '1879-03-14',
            };
         assertDeepStrictEqual(actual, expected, done);
         };
      fetchJson.get(url, params).then(handleData);
      });

   });

////////////////////////////////////////////////////////////////////////////////
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
