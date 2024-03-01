const binary_Search = (arr, searchValue, low = 0, high = arr.length - 1) => {
  
  if (high < low || arr.length === 0) return -1

  const mid = low + Math.floor((high - low) / 2)
  
  if (arr[mid] === searchValue) {
    return mid
  }
  

  if (arr[mid] > searchValue) {
    return binary_Search(arr, searchValue, low, mid - 1)
  }

  return binary_Search(arr, searchValue, mid + 1, high)
}


 const myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

 console.log(binary_Search(myArray, 6));
 console.log(binary_Search(myArray, 16));