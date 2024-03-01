const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));
let temp = n;
const Digits = String(temp).length;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** Digits;
  temp = Math.floor(temp / 10);
}

if (sum === n) {
  console.log("Yes, it is an Armstrong number.");
} else {
  console.log("No, it is not an Armstrong number.");
}
