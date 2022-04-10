/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 统计数量法
  function statistics(arr) {
    const res = {};
    for (let i = 0; i < arr.length; ++i) {
      if (res[arr[i]]) {
        res[arr[i]]++;
      } else {
        res[arr[i]] = 1;
      }
    }
    return res;
  }

  const n1 = statistics(nums1);
  const n2 = statistics(nums2);

  const obj = {};
  for (let key in n1) {
    if (key in n2) {
      obj[key] = Math.min(n1[key], n2[key]);
    }
  }

  const res = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; ++i) {
      res.push(key);
    }
  }

  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 排序法
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  // if (nums1.length > nums2.length) {
  //   const temp = nums2;
  //   nums1 = nums2;
  //   nums2 = temp;
  // }

  let i = 0,
    j = 0;
  const res = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return res;
};
