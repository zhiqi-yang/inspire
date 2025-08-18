import baseFindIndex from './baseFindIndex';
import baseIsNaN from './baseIsNaN';
import strictIndexOf from './strictIndexOf';

function baseIndexOf<T>(
  array: T[],
  value: T,
  fromIndex: number = 0
): number {
  return value === value
  ? strictIndexOf(array, value, fromIndex)
  : baseFindIndex(array, baseIsNaN, fromIndex);
}

export default baseIndexOf;