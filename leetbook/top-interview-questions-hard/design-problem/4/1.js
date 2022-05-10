var MedianFinder = function () {
  this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let start = 0,
    end = this.list.length - 1;
  while (start < end) {
    const middle = Math.ceil((start + end) / 2);
    if (this.list[middle] < num) {
      start = middle;
    } else if (this.list[middle] > num) {
      if (end === middle) {
        if (this.list[start] <= num) {
          this.list.splice(end, 0, num);
        } else {
          this.list.splice(start, 0, num);
        }
        return;
      } else {
        end = middle;
      }
    } else {
      this.list.splice(middle, 0, num);
      return;
    }
  }
  this.list.splice(this.list[start] > num ? start : start + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.list.length % 2) {
    return this.list[Math.floor(this.list.length / 2)];
  } else {
    const k = Math.floor(this.list.length / 2);
    return (this.list[k - 1] + this.list[k]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
