const prompt = require("prompt-sync")();

let n = parseInt(prompt("n = "));

for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
