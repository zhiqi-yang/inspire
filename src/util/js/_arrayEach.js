/**
 * arrayEach 函数用于遍历数组，并对每个元素执行一个给定的函数（iteratee）。如果在执行过程中，iteratee 返回 false，遍历会提前终止。
 *
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;