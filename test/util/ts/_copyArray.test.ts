import { describe, it, expect } from '@jest/globals';
import copyArray from '../../../src/util/ts/_copyArray';

describe('copyArray', () => {
  // 基础功能测试
  it('应该正确复制基础类型数组', () => {
    const source = [1, 2, 3];
    const result = copyArray(source);
    
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(source); // 验证是新数组
  });

  // 对象引用测试
  it('应该保持对象引用', () => {
    const obj = { id: 1 };
    const source = [obj];
    const result = copyArray(source);
    
    expect(result[0]).toBe(obj); // 验证对象引用相同
    expect(result).toEqual([{ id: 1 }]);
  });

  // 目标数组测试
  describe('目标数组行为', () => {
    it('应该使用提供的目标数组', () => {
      const source = ['a', 'b'];
      const target: Array<string> = new Array<string>();
      const result = copyArray(source, target);
      
      expect(result).toBe(target); // 验证是同一个数组
      expect(result).toEqual(['a', 'b']);
    });

    it('当目标数组较短时应扩展长度', () => {
      const source = [1, 2, 3];
      const target = [0]; 
      const result = copyArray(source, target);
      
      expect(result.length).toBe(3);
      expect(result).toEqual([1, 2, 3]);
    });

    it('当目标数组较长时保留多余的源数组', () => {
      const source = [1];
      const target = [0, 0, 0]; // 长度过长
      const result = copyArray(source, target);
      
      expect(result.length).toBe(3);
      expect(result).toEqual([1, 0, 0]);
    });
  });

  // 边界情况测试
  describe('边界情况', () => {
    it('应该处理空数组', () => {
      const source: number[] = [];
      const result = copyArray(source);
      
      expect(result).toEqual([]);
      expect(result.length).toBe(0);
    });

    it('应该处理未定义的目标数组', () => {
      const source = [true, false];
      const result = copyArray(source, undefined);
      
      expect(result).toEqual([true, false]);
    });

    it('应该处理null目标数组', () => {
      const source = ['x', 'y'];
      const result = copyArray(source, null as unknown as any[]);
      
      expect(result).toEqual(['x', 'y']);
    });
  });

  // 泛型类型测试
  describe('泛型类型支持', () => {
    it('应该支持复杂类型', () => {
      interface User {
        id: number;
        name: string;
      }
      const source: User[] = [{ id: 1, name: 'Alice' }];
      const result = copyArray(source);
      
      expect(result[0].name).toBe('Alice');
      expect(result[0]).toBe(source[0]); // 保持引用
    });

    it('应该支持联合类型', () => {
      const source: (string | number)[] = ['a', 1];
      const result = copyArray(source);
      
      expect(result).toEqual(['a', 1]);
    });
  });
});