//assert style
var assert = require('chai').assert;
var numbers=[1,2,3,4,5];

assert.isArray(numbers,'is array of number');
assert.include(numbers,8,'array contains');
assert.lengthOf(numbers,5,'array contains 5 numbers');

