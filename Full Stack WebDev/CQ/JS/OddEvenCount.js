let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let countEven = 0;
let countOdd = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    countEven++;
  } else {
    countOdd++;
  }
}

console.log("Even Numbers: ", countEven);
console.log("Odd Numbers: ", countOdd);
