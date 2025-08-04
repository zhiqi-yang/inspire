import { describe, it, expect } from '@jest/globals';
import arrayEvery from '../../../src/util/ts/_arrayEvery';

describe('arrayEvery', () => {
  it('当所有元素满足条件时应返回true', () => {
    const result = arrayEvery([1, 2, 3], (num) => num > 0);
    expect(result).toBe(true);
  });

  it('当有元素不满足条件时应返回false', () => {
    const result = arrayEvery([1, 2, 3, 0], (num) => num > 0);
    expect(result).toBe(false);
  });

  it('对于空数组应返回true', () => {
    const result = arrayEvery([], () => false);
    expect(result).toBe(true);
  });

  it('应正确处理null/undefined输入', () => {
    expect(arrayEvery(null, () => false)).toBe(true);
    expect(arrayEvery(undefined, () => false)).toBe(true);
  });

  it('应传递正确的参数给predicate函数', () => {
    const arr = ['a', 'b', 'c'];
    arrayEvery(arr, (value, index, array) => {
      expect(value).toBe(arr[index]);
      expect(array).toBe(arr);
      return true;
    });
  });

  it('应在第一个不满足条件的元素处停止检查', () => {
    const arr = [1, 0, 2, 3];
    let callCount = 0;
    
    arrayEvery(arr, (num) => {
      callCount++;
      return num > 0;
    });

    expect(callCount).toBe(2); // 应该在第二个元素(0)处停止
  });

  it('应处理各种类型的值', () => {
    interface TestObj {
      valid: boolean;
    }
    
    const objArr: TestObj[] = [{ valid: true }, { valid: true }];
    const objResult = arrayEvery(objArr, (obj) => obj.valid);
    expect(objResult).toBe(true);

    const mixedArr = [true, 1, 'yes'];
    const mixedResult = arrayEvery(mixedArr, (item) => Boolean(item));
    expect(mixedResult).toBe(true);
  });

  it('应正确处理复杂对象类型', () => {
    interface User {
      id: number;
      name: string;
      active: boolean;
    }
    
    const users: User[] = [
      { id: 1, name: 'Alice', active: true },
      { id: 2, name: 'Bob', active: true }
    ];
    
    const allActive = arrayEvery(users, (user) => user.active);
    expect(allActive).toBe(true);
  });
});
