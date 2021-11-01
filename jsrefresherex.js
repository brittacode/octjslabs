const firstName = "Brittany";
const lastName = "Fountain";
const fullName = firstName + " " + lastName;

console.log(fullName);

const population = 900900;

console.log(population);

console.log(population * 3);

const javascriptIsCool = true;

const color = ["yellow", "purple", "red"];

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

// solution to an example...
for (let name of names) {
  if (name.length > 5) {
    console.log(`${name} has length ${name.length}`);
  }
}

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    console.log(`${names[i]} has length ${names[i].length}`);
  }
}
//const prompt = required('prompt-sync')();

//const age = prompt(What is your age? );

//age = age + 10;

//console.log('You will be $(age) years old in 10 years');
