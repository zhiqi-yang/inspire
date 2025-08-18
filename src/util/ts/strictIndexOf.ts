function strictIndexOf<T>(array: T[], value: T, fromIndex: number = 0): number {
  const length = array.length;
  let index = fromIndex - 1;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

export default strictIndexOf;