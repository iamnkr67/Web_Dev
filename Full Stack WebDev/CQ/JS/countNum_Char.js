let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "b", "B", "C", "20", "Nitesh"];

let countTotalChar = 0;
let countTotalNum = 0;

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    countTotalChar++;
  } else if (typeof array[i] === "number") {
    countTotalNum++;
  }
}

console.log("Total Characters: ", countTotalChar);
console.log("Total Numbers: ", countTotalNum);
