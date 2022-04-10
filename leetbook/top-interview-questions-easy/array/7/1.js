/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  function plusOneAtN(arr, n) {
    if (n == arr.length + 1) {
      arr.unshift(1);
      return 0;
    }

    const sum = arr[arr.length - n] + 1;
    if (sum >= 10) {
      arr[arr.length - n] = sum % 10;
      return Math.floor(sum / 10);
    } else {
      arr[arr.length - n] = sum;
      return 0;
    }
  }

  let i = 1;
  while (plusOneAtN(digits, i)) {
    i++;
  }
  return digits;
};
