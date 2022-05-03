/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0,
    end = height.length - 1,
    max = 0;
  while (start < end) {
    const area = Math.min(height[start], height[end]) * (end - start);
    if (max < area) {
      max = area;
    }
    if (height[start] > height[end]) {
      --end;
    } else {
      ++start;
    }
  }
  return max;
};

var maxArea = function (height) {
  // 性能问题
  let max = 0;
  for (let i = 1; i < height.length; i++) {
    const element = height[i];
    for (let j = 0; j < i; ++j) {
      max = Math.max(max, Math.min(height[i], height[j]) * (i - j));
    }
  }

  return max;
};
