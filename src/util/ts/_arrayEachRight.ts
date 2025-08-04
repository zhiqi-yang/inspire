function arrayEachRight<T>(
  array: T[] | null | undefined,
  iteratee: (value: T, index: number, array: T[]) => boolean | void
): T[] | null | undefined {

  if (!array) {
    return array;
  }
  let length = array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEachRight;