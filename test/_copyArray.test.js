const { testFramework, assert } = require("../src/util/testFramework");

const copyArray = require("../src/util/js/_copyArray");

testFramework.describe('copyArray 函数测试', () => {
  testFramework.it('应正确复制数组到新数组', () => {
    const source = [1, 2, 3];
    const result = copyArray(source);
    
    assert.deepStrictEqual(result, [1, 2, 3]);
    assert.notStrictEqual(result, source);
  });

  testFramework.it('应正确复制到提供的目标数组', () => {
    const source = ['a', 'b'];
    const target = [];
    const result = copyArray(source, target);
    
    assert.deepStrictEqual(result, ['a', 'b']);
    assert.deepStrictEqual(target, ['a', 'b']);
  });

  testFramework.it('应处理空数组', () => {
    const source = [];
    const result = copyArray(source);
    
    assert.deepStrictEqual(result, []);
    assert.notStrictEqual(result, source);
  });

});
