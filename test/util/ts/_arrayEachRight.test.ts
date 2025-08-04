import { describe, it, expect } from '@jest/globals';
import arrayEachRight from '../../../src/util/ts/_arrayEachRight';

describe('arrayEachRight', () => {
  it('应该从右到左遍历数组', () => {
    const arr = [1, 2, 3];
    const result: number[] = [];
    
    arrayEachRight(arr, (value) => {
      result.push(value);
    });

    expect(result).toEqual([3, 2, 1]);
  });

  it('当回调返回false时应提前终止遍历', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const result: string[] = [];
    
    arrayEachRight(arr, (value, index) => {
      result.push(value);
      if (index === 2) return false; // 遍历到 'b' 时终止
    });

    expect(result).toEqual(['d', 'c']);
  });

  it('应该处理空数组', () => {
    const emptyArr: number[] = [];
    let callCount = 0;
    
    arrayEachRight(emptyArr, () => {
      callCount++;
    });

    expect(callCount).toBe(0);
  });

  it('应该处理null/undefined输入', () => {
    let callCount = 0;
    arrayEachRight(null, () => {
      callCount++;
    });
    expect(callCount).toBe(0);

    callCount = 0;
    arrayEachRight(undefined, () => {
      callCount++;
    });
    expect(callCount).toBe(0);
  });

  it('应该提供正确的索引和数组引用', () => {
    const arr = [10, 20, 30];
    
    arrayEachRight(arr, (value, index, array) => {
      expect(array).toBe(arr);
      expect(value).toBe(arr[index]);
    });
  });

  it('应该允许修改原数组', () => {
    const arr = [1, 2, 3];
    
    arrayEachRight(arr, (value, index, array) => {
      array[index] = value * 10;
    });

    expect(arr).toEqual([10, 20, 30]);
  });

  it('应该返回原数组', () => {
    const arr = [5, 6, 7];
    const returned = arrayEachRight(arr, () => {});
    
    expect(returned).toBe(arr);
  });

  it('应该处理稀疏数组', () => {
    const sparseArr = [1, , 3]; // 注意: 中间是空位
    const result: any[] = [];
    
    arrayEachRight(sparseArr, (value) => {
      result.push(value);
    });

    expect(result).toEqual([3, undefined, 1]);
  });
});