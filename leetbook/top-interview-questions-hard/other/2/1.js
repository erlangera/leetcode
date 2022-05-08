/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let start = 0,
    startSlow = start,
    end = height.length - 1,
    endSlow = end;

  let res = 0;
  while (start < end) {
    if (height[start] < height[end]) {
      ++start;
    } else {
      --end;
    }
    if (start != startSlow && height[start] >= height[startSlow]) {
      let area = height[startSlow] * (start - startSlow - 1);
      for (let i = startSlow + 1; i < start; ++i) {
        area -= height[i];
      }
      res += area;
      startSlow = start;
    }
    if (end != endSlow && height[end] >= height[endSlow]) {
      let area = height[endSlow] * (endSlow - end - 1);
      for (let i = end + 1; i < endSlow; ++i) {
        area -= height[i];
      }
      res += area;
      endSlow = end;
    }
  }

  return res;
};
