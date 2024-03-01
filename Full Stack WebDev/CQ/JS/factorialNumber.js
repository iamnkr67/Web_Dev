const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number : "));
let sum = 1;
for (let i = n; i > 0; i--) {
  sum *= i;
}
console.log(`The factorial of ${n} is ${sum}`);
