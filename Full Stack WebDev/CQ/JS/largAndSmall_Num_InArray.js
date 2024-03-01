let array = [1, 0, 2, 4, 5264, 6, 788, 8, 9, 10];

let lNum = 0;
let sNum = null;

for (let i = 0; i < array.length; i++) {
  if (array[i] > lNum) lNum = array[i];
  if (sNum === null || array[i] < sNum) sNum = array[i];
}

console.log("Largest Number: ", lNum);
console.log("Smallest Number: ", sNum);
