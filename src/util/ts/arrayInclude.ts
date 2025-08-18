
import baseIndexOf from "./baseIndexOf";

function arrayIncludes<T>(array: T[], value: T) {
  const length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

export default arrayIncludes;