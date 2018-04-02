// 将 kebab-case, snake_case 转为 camelCase
export function camelCase (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  return str.replace(/([-|_]\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};

const fromCamelCase = (joinChar) => {
  return (str) => {
    if (typeof str !== 'string' || !str.length) {
      return str;
    }
    return str.replace(/([A-Z])([a-z])/g, (match, a, b) => {
      return joinChar + a.toLowerCase() + b;
    });
  };
};

// 将 camelCase 转为 kebab-case
export function kebabCase (str) {
  return fromCamelCase('-');
};

// 将 camelCase 转为 snake_case
export function snakeCase (str) {
  return fromCamelCase('_');
};
