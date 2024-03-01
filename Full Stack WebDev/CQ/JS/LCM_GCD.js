const prompt = require("prompt-sync")();

let a = parseInt(prompt("a = "));
let b = parseInt(prompt("b = "));

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function lcm(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs(a * b) / gcd(a, b);
}

console.log(`LCM of ${a} and ${b} = ${lcm(a, b)}`);
console.log(`GCD of ${a} and ${b} = ${gcd(a, b)}`);
