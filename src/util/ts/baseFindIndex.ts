function baseFindIndex<T>(array: T[], 
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex: number = 0,
  fromRight?: boolean): number {
  const length = array.length;
  let  index = ( fromIndex || 0 ) + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

export default baseFindIndex;