function baseIsNaN(value: unknown): boolean {
  return value !== value;
}

export default baseIsNaN;