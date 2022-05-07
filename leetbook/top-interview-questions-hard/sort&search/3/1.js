/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  const n = nums1.length,
    m = nums2.length,
    k = Math.floor((m + n - 1) / 2),
    flag = (m + n) % 2 === 1; // true 第k+1个，false 第k+1个和第k+2个平均
  // 在长数组里找的情况
  if (m === 0 || nums2[m - 1] < nums1[k - m]) {
    // 包含短数组
    return flag ? nums1[k - m] : (nums1[k - m] + nums1[k - m + 1]) / 2;
  }
  if (nums2[0] > nums1[k]) {
    return flag
      ? nums1[k]
      : (nums1[k] +
          (k === nums1.length - 1
            ? nums2[0]
            : Math.min(nums2[0], nums1[k + 1]))) /
          2;
  }
  // 在短数组中定位, 不会出现越界情况
  let start = 0,
    end = nums2.length - 1;
  while (start <= end) {
    const middle = Math.ceil((start + end) / 2);
    const longMiddle = k - middle;
    if (nums1[longMiddle] === nums2[middle]) {
      return nums1[longMiddle];
    } else if (nums1[longMiddle] > nums2[middle]) {
      if (
        middle === nums2.length - 1 ||
        nums2[middle + 1] >= nums1[longMiddle]
      ) {
        if (longMiddle > 0 && nums1[longMiddle - 1] >= nums2[middle]) {
          return flag
            ? nums1[longMiddle - 1]
            : (nums1[longMiddle] + nums1[longMiddle - 1]) / 2;
        } else {
          return flag ? nums2[middle] : (nums1[longMiddle] + nums2[middle]) / 2;
        }
      }
      start = middle;
    } else {
      if (
        longMiddle === nums1.length - 1 ||
        nums1[longMiddle + 1] >= nums2[middle]
      ) {
        if (middle > 0 && nums2[middle - 1] >= nums1[longMiddle]) {
          return flag
            ? nums2[middle - 1]
            : (nums2[middle - 1] + nums2[middle]) / 2;
        } else {
          return flag
            ? nums1[longMiddle]
            : (nums1[longMiddle] + nums2[middle]) / 2;
        }
      }
      if (end === middle) {
        end = start;
      } else {
        end = middle;
      }
    }
  }
};
