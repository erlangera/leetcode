var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) return false;
  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.set.has(val)) return false;
  this.set.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let index = Math.floor(Math.random() * this.set.size);
  for (let item of this.set) {
    if (index === 0) {
      return item;
    }
    --index;
  }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
