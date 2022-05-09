/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.maxSize = capacity;
  this.queue = [];
  this.deleteMap = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.queue[this.queue.length - 1] !== key) {
    this.queue.push(key);
    this.deleteMap[key] = this.deleteMap[key] ? this.deleteMap[key] + 1 : 1;
  }
  return this.map.has(key) ? this.map.get(key) : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.deleteMap[key] = this.deleteMap[key] ? this.deleteMap[key] + 1 : 1;
  }
  if (!this.map.has(key) && this.maxSize === this.map.size) {
    // 挤出
    while (this.deleteMap[this.queue[0]]) {
      const k = this.queue.shift();
      --this.deleteMap[k];
      if (!this.deleteMap[k]) {
        delete this.deleteMap[k];
      }
    }
    this.map.delete(this.queue.shift());
  }
  this.map.set(key, value);
  this.queue.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
