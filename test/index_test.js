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
});