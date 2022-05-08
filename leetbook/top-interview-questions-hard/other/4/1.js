/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 性能有问题
  const area = Array(heights.length);
  area[0] = [heights[0], true];
  for (let i = 1; i < heights.length; ++i) {
    if (heights[i] >= heights[i - 1]) {
      area[i] = [heights[i], true];
    } else {
      let temp = 0;
      let index = i;
      while (index >= 0 && heights[index] >= heights[i]) {
        temp += heights[i];
        --index;
      }
      area[i] = [temp, true];

      for (let j = i - 1; j >= 0; --j) {
        if (heights[j] > heights[i]) {
          area[j][1] = false;
        }
      }
    }
    for (let j = i - 1; j >= 0; --j) {
      if (area[j][1]) {
        area[j][0] += heights[j];
      }
    }
  }

  let res = 0;
  for (let i = 0; i < area.length; ++i) {
    if (area[i][0] > res) {
      res = area[i][0];
    }
  }

  return res;
};

var largestRectangleArea = function (heights) {
  // 单调栈
  const stack = [[heights[0], 0]];
  let res = 0;
  heights.push(0);
  for (let i = 1; i < heights.length; ++i) {
    if (heights[i] < stack[stack.length - 1][0]) {
      // 退栈
      let index = i;
      while (stack.length && heights[i] < stack[stack.length - 1][0]) {
        index = stack[stack.length - 1][1];
        const area = stack[stack.length - 1][0] * (i - index);
        if (area > res) {
          res = area;
        }
        stack.pop();
      }
      stack.push([heights[i], index]);
    } else {
      stack.push([heights[i], i]);
    }
  }

  return res;
};
