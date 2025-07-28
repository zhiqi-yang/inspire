const copyArray = require("../src/util/js/_copyArray");

console.log('copyArray 函数测试');
console.log('  case: 应正确复制数组到新数组');

const expected = [1, 2, 3];
const result = copyArray(expected);

if (JSON.stringify(result) !== JSON.stringify(expected)) {
  console.log(`期望 ${JSON.stringify(expected)}，实际得到 ${JSON.stringify(result)}`);
  console.error('失败');
  return;
}

if (expected === result) {
  console.log(`期望不同引用，实际得到相同引用`);
  console.error('失败');
  return;
}

console.info('成功');