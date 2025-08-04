const assert = require('assert');
const arrayEachRight = require('@/util/js/_arrayEachRight.js');


describe('arrayEachRight', function() {
  it('应该从右到左遍历数组', function() {
    const arr = [1, 2, 3];
    const result = [];
    
    arrayEachRight(arr, function(value) {
      result.push(value);
    });

    assert.deepStrictEqual(result, [3, 2, 1]);
  });

  it('当回调返回false时应提前终止遍历', function() {
    const arr = ['a', 'b', 'c', 'd'];
    const result = [];
    
    arrayEachRight(arr, function(value, index) {
      result.push(value);
      if (index === 2) return false; // 遍历到 'b' 时终止
    });

    assert.deepStrictEqual(result, ['d', 'c']);
  });

  it('应该处理空数组', function() {
    const emptyArr = [];
    var callCount = 0;
    
    arrayEachRight(emptyArr, function() {
      callCount++;
    });

    assert.strictEqual(callCount, 0);
  });

  it('应该处理null/undefined输入', function() {
    var callCount = 0;
    arrayEachRight(null, function() {
      callCount++;
    });
    assert.strictEqual(callCount, 0);

    callCount = 0;
    arrayEachRight(undefined, function() {
      callCount++;
    });
    assert.strictEqual(callCount, 0);
  });

  it('应该提供正确的索引和数组引用', function() {
    const arr = [10, 20, 30];
    
    arrayEachRight(arr, function(value, index, array) {
      assert.strictEqual(array, arr);
      assert.strictEqual(value, arr[index]);
    });
  });

  it('应该允许修改原数组', function() {
    const arr = [1, 2, 3];
    
    arrayEachRight(arr, function(value, index, array) {
      array[index] = value * 10;
    });

    assert.deepStrictEqual(arr, [10, 20, 30]);
  });

  it('应该返回原数组', function() {
    const arr = [5, 6, 7];
    const returned = arrayEachRight(arr, function() {});
    
    assert.strictEqual(returned, arr);
  });

  it('应该处理稀疏数组', function() {
    const sparseArr = [1, , 3]; // 注意: 中间是空位
    const result = [];
    
    arrayEachRight(sparseArr, function(value) {
      result.push(value);
    });

    assert.deepStrictEqual(result, [3, undefined, 1]);
  });
});