const baseFindIndex = require('./baseFindIndex'),
    baseIsNaN = require('./baseIsNaN'),
    strictIndexOf = require('./strictIndexOf');


function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;