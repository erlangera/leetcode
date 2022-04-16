var MinStack = function () {
  this.stack = [];
  this.queue = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (!this.queue.length) {
    this.queue.push(val);
    return;
  }

  if (this.queue.length === 1) {
    if (this.queue[0] <= val) {
      this.queue.push(val);
    } else {
      this.queue.splice(0, 0, val);
    }
    return;
  }

  let start = 0,
    end = this.queue.length;
  while (start !== end) {
    const middle = Math.ceil((start + end) / 2);
    if (this.queue[middle] > val) {
      if (middle === end) {
        // 此时start与end相邻
        if (this.queue[end - 1] > val) {
          end = end - 1;
        } else {
          start = start + 1;
        }
      } else {
        end = middle;
      }
    } else {
      start = middle;
    }
  }
  this.queue.splice(start, 0, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  const index = this.queue.indexOf(val);
  this.queue.splice(index, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.queue[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
