function arrayFilter<T>(
  array: T[] | null | undefined,
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  let index = -1;
  const length = array == null ? 0 : array.length;
  let resIndex = 0;
  const result: T[] = [];

  while (++index < length) {
    const value = array![index]; // 非空断言，因为前面已经检查过length
    if (predicate(value, index, array!)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default arrayFilter;