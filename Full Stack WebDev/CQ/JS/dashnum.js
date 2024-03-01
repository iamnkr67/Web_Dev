const prompt =  require("prompt-sync")();

function dash(num) {
    let numStr = num.toString();
    let result = [];

    for (let i = 0; i < numStr.length; i++) {
       
       if (numStr[i + 1] % 2 === 0 && numStr[i] % 2 === 0) {
            result +=  numStr[i] + "-"
        } 
        else 
            result += numStr[i];
    }

    return result;
}

let input = prompt("Enter : ");
let output = dash(input);
console.log(output); 


