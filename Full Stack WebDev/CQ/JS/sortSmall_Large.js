function sortArr(arr) {
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log("Using Function ", sortArr([3, 5, 2, 1, 8, 7]));

console.log("");

// Method 2:
let array = [3, 2, 1, 5, 8, 7];
array.sort(function (a, b) {
  return a - b;
});
console.log("Using array.sort() ", array);
