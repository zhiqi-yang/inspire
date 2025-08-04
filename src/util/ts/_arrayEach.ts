/**
 * arrayEach 函数用于遍历数组，并对每个元素执行一个给定的函数（iteratee）。如果在执行过程中，iteratee 返回 false，遍历会提前终止。
 *
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach<T>(
  array: T[] | null | undefined,
  iteratee: (value: T, index: number, array: T[]) => boolean | void
): T[] | null | undefined {
  
  if (!array) {
    return array;
  }

  let index = -1;
  const length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEach;