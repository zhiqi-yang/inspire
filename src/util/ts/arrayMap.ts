function arrayMap<T>(array: T[], iteratee: (t: T, index: number, array: T[]) => T): T[] {
  let index = -1;
  const length = array == null ? 0 : array.length,
        result = new Array<T>(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export default arrayMap;