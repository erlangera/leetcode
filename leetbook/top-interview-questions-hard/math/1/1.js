/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return nums
    .map((item) => item.toString())
    .sort((a, b) => {
      while (true) {
        if (a.length < b.length && b.startsWith(a)) {
          b = b.slice(a.length);
        } else if (a.length > b.length && a.startsWith(b)) {
          a = a.slice(b.length);
        } else {
          break;
        }
      }
      return a > b ? -1 : 1;
    })
    .join('')
    .replace(/^0+/, '0');
};
