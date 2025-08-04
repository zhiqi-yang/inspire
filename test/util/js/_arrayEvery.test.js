const assert = require('assert');
const arrayEvery = require('@/util/js/_arrayEvery.js');

describe('arrayEvery', function() {
  it('当所有元素满足条件时应返回true', function() {
    const result = arrayEvery([1, 2, 3], function(num) {
      return num > 0;
    });
    assert.strictEqual(result, true);
  });

  it('当有元素不满足条件时应返回false', function() {
    const result = arrayEvery([1, 2, 3, 0], function(num) {
      return num > 0;
    });
    assert.strictEqual(result, false);
  });

  it('对于空数组应返回true', function() {
    const result = arrayEvery([], function() {
      return false;
    });
    assert.strictEqual(result, true);
  });

  it('应正确处理null/undefined输入', function() {
    const nullResult = arrayEvery(null, function() {
      return false;
    });
    assert.strictEqual(nullResult, true);

    const undefinedResult = arrayEvery(undefined, function() {
      return false;
    });
    assert.strictEqual(undefinedResult, true);
  });

  it('应传递正确的参数给predicate函数', function() {
    const arr = ['a', 'b', 'c'];
    arrayEvery(arr, function(value, index, array) {
      assert.strictEqual(value, arr[index]);
      assert.strictEqual(array, arr);
      return true;
    });
  });

  it('应在第一个不满足条件的元素处停止检查', function() {
    const arr = [1, 0, 2, 3];
    let callCount = 0;
    
    arrayEvery(arr, function(num) {
      callCount++;
      return num > 0;
    });

    assert.strictEqual(callCount, 2); // 应该在第二个元素(0)处停止
  });

  it('应处理各种类型的值', function() {
    const objArr = [{ valid: true }, { valid: true }];
    const objResult = arrayEvery(objArr, function(obj) {
      return obj.valid;
    });
    assert.strictEqual(objResult, true);

    const mixedArr = [true, 1, 'yes'];
    const mixedResult = arrayEvery(mixedArr, function(item) {
      return Boolean(item);
    });
    assert.strictEqual(mixedResult, true);
  });
});