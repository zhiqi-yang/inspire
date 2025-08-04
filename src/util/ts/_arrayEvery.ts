function arrayEvery<T>(
  array: T[] | null | undefined,
  predicate: (value: T, index: number, array: T[]) => boolean
): boolean {
  if (!array) {
    return true;
  }
  let index = -1;
  const length = array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

export default arrayEvery;