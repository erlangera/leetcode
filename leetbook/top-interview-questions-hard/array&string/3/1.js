/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = {};
  for (let i = 0; i < nums1.length; ++i) {
    for (let j = 0; j < nums2.length; ++j) {
      const temp = -nums1[i] - nums2[j];
      map[temp] = temp in map ? map[temp] + 1 : 1;
    }
  }
  let res = 0;
  for (let i = 0; i < nums3.length; ++i) {
    for (let j = 0; j < nums4.length; ++j) {
      const temp = nums3[i] + nums4[j];
      res += temp in map ? map[temp] : 0;
    }
  }
  return res;
};

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // 优化
};
