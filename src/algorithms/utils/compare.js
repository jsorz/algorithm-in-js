export const Compare = {
  LT: -1,
  GT: 1,
  EQ: 0
};

export function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LT : Compare.GT;
};

export function defaultEquals(a, b) {
  return a === b;
};
