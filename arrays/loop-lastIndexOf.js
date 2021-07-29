const lastIndexOf = function (array, num) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      index = i;
    }
  }
  if (array.indexOf(num) < 0) {
    return -1;
  }
  return index;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);