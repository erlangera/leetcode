/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  for (let [x, y] of intervals) {
    // 二分查找插入位置
    const start = getIndex(res, x);
    const end = getIndex(res, y);
    if (start % 2) {
      if (end % 2) {
        res.splice(start, end - start);
      } else {
        res.splice(start, end - start, y);
      }
    } else {
      if (end % 2) {
        res.splice(start, end - start, x);
      } else {
        res.splice(start, end - start, x, y);
      }
    }
  }
  let temp = [];
  for (let i = 0; i < res.length; i += 2) {
    temp.push([res[i], res[i + 1]]);
  }
  if (!temp.length) {
    return temp;
  }
  // 合并相邻
  const result = [temp[0]];
  for (let i = 1; i < temp.length; ++i) {
    const current = result[result.length - 1];
    if (current[1] === temp[i][0]) {
      current[1] = temp[i][1];
    } else {
      result.push(temp[i]);
    }
  }
  return result;
};

function getIndex(arr, n) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const middle = Math.ceil((start + end) / 2);
    if (arr[middle] < n) {
      start = middle;
    } else if (arr[middle] > n) {
      if (end === middle) {
        if (arr[start] < n) {
          start = end;
        } else {
          end = start;
        }
      } else {
        end = middle;
      }
    } else {
      start = end = middle;
    }
  }
  // 末尾插入
  if (start === arr.length - 1 && arr[start] < n) {
    return arr.length;
  }
  return start;
}
