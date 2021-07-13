// import assert
const assert = require('assert');
const Rooster = require('../JS/index.js');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('return a rooster call', () => {

          // Setup
          const expected = 'cock-a-doodle-doo!';

          // Exercise
          const actual = Rooster.announceDawn();

          // Verify
          assert.equal(actual, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {

          // Setup
          const inputNumber = 12;
          const expected = '12';

          // Exercise
          const actual = Rooster.timeAtDawn(inputNumber);

          // Verify
          assert.strictEqual(actual, expected);
        });
        it('thows a range error if passed a number less than 0', () => {

          // Setup
          const inputNumber = -1;
          const expected = RangeError;

          // Verify
          assert.throws(() => {
            Rooster.timeAtDawn(inputNumber); // Exercise
          }, expected);
        });
        it('thows a range error if passed a number greater than 23', () => {

          // Setup
          const inputNumber = 24;
          const expected = RangeError;

          // Verify
          assert.throws(() => {
            Rooster.timeAtDawn(inputNumber); // Exercise
          }, expected);
        });
    });
});