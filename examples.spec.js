// assert-deep-strict-equal
// Examples
//
// To run these examples:
//    $ cd assert-deep-strict-equal
//    $ npm install
//    $ npm test
//    $ npx mocha examples.spec.js
//
// *** Note ***
// In your project, replace the "example use only" import with
// the real import:
//    import { assertDeepStrictEqual } from 'assert-deep-strict-equal';

// Imports
import { assertDeepStrictEqual } from './dist/assert-deep-strict-equal.js';  //example use only
import { fetchJson } from 'fetch-json';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Star Wars API result for spaceship #3', () => {

   it('is a Star Destroyer', (done) => {
      const url = 'https://swapi.py4e.com/api/starships/3/';
      const handleData = (data) => {
         const actual =  {
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
         actual.name = 'BOGUS!';  //simulate bad data to trigger an assertion failure
         assertDeepStrictEqual(actual, expected, done);
         };
      fetchJson.get(url).then(handleData);
      });

   });
