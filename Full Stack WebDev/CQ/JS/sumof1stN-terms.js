const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter number : "));

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
