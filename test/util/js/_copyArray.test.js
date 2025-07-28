const assert = require('assert');
const copyArray = require('@/util/js/_copyArray.js');

describe('copyArray 函数测试', () => {
  it('应正确复制数组到新数组', () => {
    const source = [1, 2, 3];
    const result = copyArray(source);
    
    assert.deepStrictEqual(result, [1, 2, 3]);
    assert.notStrictEqual(result, source); // 验证不是同一个引用
  });

  it('应正确复制到提供的目标数组', () => {
    const source = ['a', 'b', 'c'];
    const target = [];
    const result = copyArray(source, target);
    
    assert.deepStrictEqual(result, ['a', 'b', 'c']);
    assert.strictEqual(result, target); // 验证是同一个引用
  });

  it('应处理空数组', () => {
    const source = [];
    const result = copyArray(source);
    
    assert.deepStrictEqual(result, []);
    assert.strictEqual(result.length, 0);
  });

  it('应正确处理对象引用', () => {
    const obj = { id: 1 };
    const source = [obj];
    const result = copyArray(source);
    
    assert.deepStrictEqual(result, [{ id: 1 }]);
    assert.strictEqual(result[0], obj); // 验证对象引用相同
  });

  it('当目标数组较短时应扩展长度', () => {
    const source = [1, 2, 3];
    const target = [0]; // 长度不足
    const result = copyArray(source, target);
    
    assert.deepStrictEqual(result, [1, 2, 3]);
    assert.strictEqual(result.length, 3);
  });

  it('当目标数组较长时保留原有超长的元素', () => {
    const source = [1];
    const target = [0, 0, 0]; // 长度过长
    const result = copyArray(source, target);
    
    assert.deepStrictEqual(result, [1, 0, 0]);
    assert.strictEqual(result.length, 3);
  });

  it('应正确处理未定义的目标数组', () => {
    const source = [true, false];
    const result = copyArray(source, undefined);
    
    assert.deepStrictEqual(result, [true, false]);
  });

  it('应正确处理null目标数组', () => {
    const source = ['x', 'y'];
    const result = copyArray(source, null);
    
    assert.deepStrictEqual(result, source);
  });
});