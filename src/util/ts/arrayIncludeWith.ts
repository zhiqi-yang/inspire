function arrayIncludesWith<T>(array: T[], value: T, comparator: (t1: T, t2: T) => boolean) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

export default arrayIncludesWith;