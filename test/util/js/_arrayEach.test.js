const assert = require('assert');
const arrayEach = require('@/util/js/_arrayEach.js');

describe('arrayEach 函数测试', () => {
  it('应正确遍历数组并执行回调', () => {
    const arr = [1, 2, 3];
    const result = [];
    arrayEach(arr, (value) => {
      result.push(value * 2);
    });

    assert.deepStrictEqual(result, [2, 4, 6]);
  });

  it('应在回调返回 false 时提前终止遍历', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const result = [];
    arrayEach(arr, (value, index) => {
      result.push(value);
      if (index === 1) return false;
    });

    assert.deepStrictEqual(result, ['a', 'b']);
  });

  it('应正确处理空数组', () => {
    const emptyArr = [];
    let called = false;
    arrayEach(emptyArr, () => {
      called = true; // 不应执行
    });

    assert.strictEqual(called, false);
  });

  it('应正确处理 null/undefined 输入', () => {
    let called = false;
    arrayEach(null, () => {
      called = true; // 不应执行
    });
    assert.strictEqual(called, false);

    called = false;
    arrayEach(undefined, () => {
      called = true; // 不应执行
    });
    assert.strictEqual(called, false);
  });

  it('应正确传递索引和原数组参数', () => {
    const arr = [10, 20, 30];
    arrayEach(arr, (value, index, array) => {
      assert.strictEqual(array, arr);
      assert.strictEqual(value, arr[index]);
    });
  });

  it('应允许修改原数组', () => {
    const arr = [1, 2, 3];
    arrayEach(arr, (value, index, array) => {
      array[index] = value * 10;
    });

    assert.deepStrictEqual(arr, [10, 20, 30]);
  });

  it('应返回原数组', () => {
    const arr = [5, 6, 7];
    const returned = arrayEach(arr, () => {});

    assert.strictEqual(returned, arr);
  });
});