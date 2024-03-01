const prompt = require("prompt-sync")();

function findPrimeFactors(num) {
  let primeFactors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }

  return primeFactors;
}

let userInput = prompt("Enter a number to find its prime factors : ");
let primeFactors = findPrimeFactors(userInput);
console.log(primeFactors);
