function strictIndexOf(array, value, fromIndex) {
  const length = array.length;
  let index = ( fromIndex || 0 ) - 1;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}