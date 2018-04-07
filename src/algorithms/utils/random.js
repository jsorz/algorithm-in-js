import swap from './swap';

/**
 * 选取随机整数
 * @param {Number} min - 下限
 * @param {Number} max - 上限
 * @returns {Number} - 包含上下限端点的随机值
 */
export const randomInt = (min = 0, max = 100) => {
 min = parseInt(min);
 max = parseInt(max);
 if (Number.isNaN(min) || Number.isNaN(max)) {
   throw Error('randomInt cannot accept non-number parameter');
 }
 if (max < min) {
   let tmp = min;
   min = max;
   max = tmp;
 }
 return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * 随机整数数组
 * @param {Number} length - 数组长度
 * @param {Object} config - 配置项
 *    @param {Number} min - 整数下限
 *    @param {Number} max - 整数上限
 *    @param {Boolean} duplicated - 是否允许重复
 * @returns {Array} - 给定长度的随机数据
 */
export const randomArray = (length, config) => {
  length = +length;
  if (length <= 0) {
    return [];
  }

  config = config || {};
  let min = config.min || 0;
  let max = config.max || length - 1;
  let duplicated = config.duplicated || false;
  min = +min;
  max = +max;

  if (max < min) {
    let tmp = min;
    min = max;
    max = tmp;
  }

  // 以 [min, max] 作为候选区间
  let candidates = Array.apply(null, { length: max - min + 1 })
    .map(function (v, i) { return min + i; });

  let results = [];
  let i;
  while (length-- && candidates.length) {
    i = randomInt(0, candidates.length - 1);
    results.push(candidates[i]);
    // 不允许重复
    if (!duplicated) {
      candidates.splice(i, 1);
    }
  }
  return results;
};

/**
 * 数组洗牌
 * @param {Array} array
 * @returns {Array} 乱序后的数组
 */
export const shuffle = (array) => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    swap(array, currentIndex, randomIndex);
  }
  return array;
};
