const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter number : "));
let temp = n;

console.log("-------------------------------\n");
//Method 1:
let rev = 0;
while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(`M1 : Reverse of given number ${n} is ${rev}`);
console.log();

//Method 2:
function reverseNum(n) {
  let reversed = parseInt(n.toString().split("").reverse().join(""));
  return isNaN(reversed) ? "NaN" : reversed;
}
console.log(`M2 : Reverse of given number ${n} is ${reverseNum(n)}`);
console.log("\n-------------------------------");
