# 基础语法训练

## 实现数组遍历函数

**需求**
```js
/**
 * arrayFilter 函数用于遍历过滤数组，并对每个元素执行一个给定的函数（predicate），predicate 返回 true，则满足条件，添加到新数组中。
 *
 * @param {Array} [array] 需要迭代的数组.
 * @param {Function} predicate 每次迭代时调用的判断函数
 * @returns {Array} 返回过滤后的新数组
 */
function arrayFilter(array, predicate) {
  // ...
}
```

### **JS实现**
新建 **src/util/js/_arrayFilter.js** 文件
```js
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;
```


### **TS实现**
新建 **src/util/ts/_arrayFilter.ts**
```ts
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
```



## 实现数组 _.findIndex和 _.findLastIndex 

**需求**
```js
/**
 * 在数组中从左到右(或者从右到左)查找第一个满足条件的元素，返回其索引（找不到返回 -1）
 *
 * @private
 * @param {Array} array 要检索的数组
 * @param {Function} predicate 每次迭代时调用的断言函数
 * @param {number} fromIndex 开始搜索的索引位置
 * @param {boolean} [fromRight] 指定是否从右向左迭代（可选参数）
 * @returns {number} 返回匹配值的索引，未找到则返回 -1
 */
```


### **JS实现**
新建 **src/util/js/baseFindIndex.js** 文件
```js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;
```

### **TS实现**
新建 **src/util/ts/baseFindIndex.ts**
```ts
function baseFindIndex<T>(
  array: T[], 
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex: number = 0,
  fromRight?: boolean): number {
  const length = array.length;
  let index = ( fromIndex || 0 ) + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

export default baseFindIndex;
```

## 判断是否是 NaN (not a number)

新建 **src/util/js/baseIsNaN.js** 文件
```js
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;
```

### **TS实现**
新建 **src/util/ts/baseIsNaN.ts**
```ts
function baseIsNaN(value: unknown): boolean {
  return value !== value;
}

module.exports = baseIsNaN;
```

## 通过严格判断相等查找元素在数组中的位置

新建 **src/util/js/strictIndexOf.js** 文件
```js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;
```

### **TS实现**
新建 **src/util/ts/strictIndexOf.ts**
```ts
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
```


## **基础索引查找实现，处理包括 NaN 在内的各种值**

```js
/**
 * 基础索引查找实现，处理包括 NaN 在内的各种值
 * @template T - 数组元素类型
 * @param {T[]} array - 要搜索的数组
 * @param {T} value - 要查找的值
 * @param {number} [fromIndex=0] - 搜索起始位置
 * @returns {number} 返回匹配元素的索引，未找到返回 -1
 */
```

新建 **src/util/js/baseIndexOf.js** 文件
```js
const baseFindIndex = require('./baseFindIndex'),
    baseIsNaN = require('./baseIsNaN'),
    strictIndexOf = require('./strictIndexOf');


function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;
```

### **TS实现**
新建 **src/util/ts/baseIndexOf.ts**
```ts
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
```


## **检查数组中是否包含某个值**

新建 **src/util/js/arrayIncludes.js** 文件
```js
const baseIndexOf = require('./_baseIndexOf');

function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;
```

### **TS实现**
新建 **src/util/ts/arrayIncludes.ts**
```ts
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
```

## **通过指定条件，检查数组中是否包含某个值**

新建 **src/util/js/arrayIncludesWith.js** 文件
```js
function arrayIncludesWith(array, value, comparator) {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;
```

### **TS实现**
新建 **src/util/ts/arrayIncludesWith.ts**
```ts
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
```

## **遍历转换数组**

新建 **src/util/js/arrayMap.js** 文件
```js
function arrayMap(array, iteratee) {
  let index = -1;
  const length = array == null ? 0 : array.length,
        result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;
```

### **TS实现**
新建 **src/util/ts/arrayMap.ts**
```ts
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
```


