// 手写简易测试框架
const testFramework = {

  describe(description, testSuite) {
    console.log(`\n${description}`);
    try {
      testSuite();
      console.log('  ✓ 所有测试通过');
    } catch (error) {
      console.error(`  ✘ 测试失败: ${error.message}`);
    }
  },
  
  it(testName, testCase) {
    console.log(`  - ${testName}... `);
    try {
      testCase();
      console.log('通过');
    } catch (error) {
      console.log('失败');
      throw error;
    }
  }
};

// 手写 assert 断言库
const assert = {

  
  deepStrictEqual(actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`期望 ${JSON.stringify(expected)}，实际得到 ${JSON.stringify(actual)}`);
    }
  },
  
  notStrictEqual(actual, expected) {
    if (actual === expected) {
      throw new Error(`期望不同引用，实际得到相同引用`);
    }
  }
};

module.exports = {
  testFramework,
  assert
}