const firstName = "Brittany";
const lastName = "Fountain";
const fullName = firstName + " " + lastName;

console.log(fullName);

const population = 900900;

console.log(population);

console.log(population * 3);

const javascriptIsCool = true;

const color = ["yellow", "purple", "red"];

const actualTemp = 82;
const desiredTemp = 73;
{
  if (actualTemp === desiredTemp) {
    console.log("Stand by");
  } else if (actualTemp < desiredTemp) {
    console.log("Run Heat");
  } else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
  }
}

const prompt = require("prompt-sync")();

const email = prompt("What is your email? ");
const password = prompt("What is your password? ");

const adminEmail = "mfanto@gmail.com";
const adminPassword = "secret";

if (email === adminEmail && password === adminPassword) {
  console.log("Welcome to the system");
} else {
  console.log("Denied");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//const prompt = required('prompt-sync')();

//const age = prompt(What is your age? );

//age = age + 10;

//console.log('You will be $(age) years old in 10 years');
