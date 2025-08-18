function arrayMap(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length,
        result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;