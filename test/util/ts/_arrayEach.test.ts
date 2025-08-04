import { describe, it, expect } from '@jest/globals';
import arrayEach from '../../../src/util/ts/_arrayEach';

describe('arrayEach 数组遍历函数测试', () => {
  // 测试1: 基本遍历功能
  it('应该正确遍历数字数组并执行回调', () => {
    const arr = [1, 2, 3];
    const result: number[] = [];
    
    arrayEach(arr, (value) => {
      result.push(value * 2);
    });

    expect(result).toEqual([2, 4, 6]);
  });

  // 测试2: 提前终止功能
  it('当回调返回false时应提前终止遍历', () => {
    const arr = ['苹果', '香蕉', '橙子', '西瓜'];
    const result: string[] = [];
    
    arrayEach(arr, (value, index) => {
      result.push(value);
      if (value === '香蕉') return false;
    });

    expect(result).toEqual(['苹果', '香蕉']);
  });

  // 测试3: 空数组处理
  it('应该正确处理空数组', () => {
    const emptyArr: number[] = [];
    let 调用次数 = 0;
    
    arrayEach(emptyArr, () => {
      调用次数++;
    });

    expect(调用次数).toBe(0);
  });

  // 测试4: null/undefined 输入处理
  it('应该正确处理null/undefined输入并返回空数组', () => {
    const null结果 = arrayEach(null, () => {});
    const undefined结果 = arrayEach(undefined, () => {});
    
    expect(null结果).toEqual(null);
    expect(undefined结果).toEqual(undefined);
  });

  // 测试5: 参数验证
  it('应该提供正确的索引和数组引用', () => {
    const arr = [10, 20, 30];
    
    arrayEach(arr, (值, 索引, 当前数组) => {
      expect(当前数组).toBe(arr);
      expect(值).toBe(arr[索引]);
    });
  });

  // 测试6: 修改原数组功能
  it('应该允许修改原始数组', () => {
    const arr = [1, 2, 3];
    
    arrayEach(arr, (值, 索引, 当前数组) => {
      当前数组[索引] = 值 * 10;
    });

    expect(arr).toEqual([10, 20, 30]);
  });

  // 测试7: 返回值验证
  it('对于非空输入应该返回原数组', () => {
    const arr = ['A', 'B', 'C'];
    const 返回值 = arrayEach(arr, () => {});
    
    expect(返回值).toBe(arr);
  });

  // 测试8: 复杂对象类型处理
  it('应该正确处理复杂对象类型', () => {
    interface 用户 {
      id: number;
      name: string;
      年龄: number;
    }
    
    const 用户列表: 用户[] = [
      { id: 1, name: '张三', 年龄: 25 },
      { id: 2, name: '李四', 年龄: 30 }
    ];
    
    const 名称列表: string[] = [];
    arrayEach(用户列表, (用户) => {
      名称列表.push(用户.name);
    });

    expect(名称列表).toEqual(['张三', '李四']);
  });

  // 测试9: 稀疏数组处理
  it('应该正确处理稀疏数组', () => {
    const 稀疏数组 = [1, , 3]; // 注意中间是空位
    const 结果: any[] = [];
    
    arrayEach(稀疏数组, (值) => {
      结果.push(值);
    });

    expect(结果).toEqual([1, undefined, 3]);
  });
});