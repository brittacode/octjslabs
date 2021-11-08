//ex
function greetClass() {
  console.log("Hello Class!");
}

greetClass();

// ex

function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(10, 5));

//ex

function totalCost(cola, tax) {
  return cola + tax;
}

console.log(totalCost(2, 0.06));

//solution
function totalCost(amount) {
  return amount + amount * 0.06;
}

console.log(totalCost(2));

//ex -
//function totalTax(amount, state) {
// if (state === "MI") {
//   return amount + amount * 0.06;
//} else if (state === "OH") {
//return amount + amount * 0.0723;
// }
//}
//console.log(totalTax(5));

//
function isEven(number) {
  return number % 2 === 0;
}

for (let i = 1; i <= 100; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}

// function declaration example
function sayHello(name) {
  console.log(`Hello ${name}`);
}

// function expression
const sayHelloTwo = function (name) {
  console.log(`Hello ${name}`);
};

// arrow function
const sayHelloThree = (name) => {
  console.log(`Hello ${name}`);
};

//ex -11/3
function totalTax(amount, state = 0.06) {
  return amount + amount * 0.06;
}
console.log(stateTax(5));
