
/*Object ----

function Person(name, age, sex){
    this.name = name;
    this.age = 45;
    this.sex = sex;
}
const rand = new Person("Nitesh Kumar", 19, "M");
document.write(rand.name + " " + rand.age + " " + rand.sex)*/




/*swap number

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let temp;
//logic 
temp =a;
a = b;
b = temp;
 
console.log(`Number a after swapping: ${a}`);
console.log(`Number b after swapping: ${b}`);*/





//Calculate triangle area when sides are known:

// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));
// // calculate the semi-perimeter
// const s = (side1 + side2 + side3) / 2;

// //calculate the area
// const areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(
//   `The area of the triangle is ${areaValue}`
// );



//when base and height is given :
// let baseValue = +prompt('Enter the base of a triangle: ');
// let heightValue = +prompt('Enter the height of a triangle: ');

// // calculate the area
// let areaValue = (baseValue * heightValue) / 2;

// console.log(
//   `The area of the triangle is ${areaValue}`
// );


// let a = [45,67,88,777];
// a.push(3);
// a.push(545);
// a.pop();
// a.shift();
// a.unshift(55);
// a.sort();
// console.log(a);
// a.splice(1, 3, "HI NKR")
// console.log(a);
// console.log(a.indexOf(3));

// let arr = ['h', 'e'];
// arr.name = 'John';

// console.log(arr); // ["h", "e"]
// console.log(arr.name); // "John"
// console.log(arr['name']); // "John"


let arr = [8,6,4,3,1];
for(let i = 0; i<5; i++)
{
    arr = arr[i]*arr[i];
    console.log(arr[i])
}
