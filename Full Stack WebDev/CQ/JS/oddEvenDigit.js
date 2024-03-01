const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter num : "));

const numberOfDigits = String(n).length;
let even = "";
let odd = "";
for (let i = 0; i < numberOfDigits; i++) {
  let digit = n % 10;
  if (digit % 2 == 0) {
    even += digit + ",";
  } else odd += digit + ",";

  n = Math.floor(n / 10);
}
console.log(`Even : ${even.slice(0, -1)} \n Odd : ${odd.slice(0, -1)}`);
