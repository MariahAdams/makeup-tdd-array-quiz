const assert = require('assert');
// const { arrayMethod } = require('../lib/array-methods');

describe('array methods', () => {

    let words = ['sky', 'hot', 'Yeti', 'green'];

    it('takes an array of words and returns a new array that has removed words that contain Y/y', () => {
        const expected = ['hot', 'green'];
        assert.equal(words, expected);
    });
});