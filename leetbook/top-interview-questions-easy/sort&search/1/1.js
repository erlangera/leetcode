/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let current = n + m - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[current] = nums1[m];
      m--;
    } else {
      nums1[current] = nums2[n];
      n--;
    }
    current--;
  }
  if (n >= 0) {
    while (n >= 0) {
      nums1[current] = nums2[n];
      n--;
      current--;
    }
  }
};
