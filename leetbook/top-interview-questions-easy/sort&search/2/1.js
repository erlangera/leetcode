/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) return 1;

    let start = 1,
      end = n;
    while (start !== end) {
      const middle = Math.ceil((start + end) / 2);
      if (isBadVersion(middle)) {
        if (middle === end) {
          if (isBadVersion(end - 1)) {
            return end - 1;
          } else {
            return end;
          }
        } else {
          end = middle;
        }
      } else {
        start = middle !== start ? middle : start + 1;
      }
    }
    return start;
  };
};
