/**
 * ​将 source 的值复制到 array 中。
 *
 * @private
 * @param {Array} source 要拷贝值的源数组.
 * @param {Array} [array=[]] 要拷贝值的目标数组（可选，默认为空数组）。
 * @returns {Array} 返回 array。
 */
function copyArray<T>(source: T[], array?: T[]): T[] {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

export default copyArray;