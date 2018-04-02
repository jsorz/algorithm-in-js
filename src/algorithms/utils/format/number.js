/**
 * 格式化数字
 *
 * @param  {number} val             需要格式化的数字
 * @param  {number} [splitLen=3]    分隔符`,`的位置，默认千位分隔
 * @param  {number} [decimalLen=0]  保留小数位数
 * @return {string}
 */
export const formatNumber = (val, splitLen = 3, decimalLen = 0) => {
  if (val == null || val === '' || Number.isNaN(Number(val))) {
    return '-';
  }
  let num = val;
  if (decimalLen >= 0) {
    num = num.toFixed(decimalLen);
  }
  // 记录正负号
  const symbol = num < 0 ? '-' : '';
  num = Math.abs(num);

  // 小数点切分
  const numberArr = (num + '').split('.');
  const intNum = numberArr[0].split('').reverse();
  const decNum = numberArr[1] || '';

  let len = Math.floor(intNum.length / splitLen);
  let remainder = intNum.length % splitLen;
  // NOTE: 位数刚好时，最高位不分隔，例如 100000 => '100,000'
  len = remainder === 0 ? len - 1 : len;
  // 追加千位分隔符
  for (let i = 1; i <= len; i++) {
    intNum.splice(splitLen * i + (i - 1), 0, ',');
  }

  return symbol + intNum.reverse().join('') + (decNum.length > 0 ? ('.' + decNum) : '');
};
