//for (let i = 1; i <= 10; i++) {
//console.log(i);
//}

const countEvens = (end) => {
  for (let i = 2; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
countEvens(100);

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

for (let i = 100; i >= 1; i--) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

for (i = 5; i < 50; i = i + 5) {
  console.log(i);
}

//let i = 1;

//do {
//if (i % 2 === 0) {
//console.log(i);
//i++;
//  }
//} while (i <= 100);

//let i = 1;
//while (i <= 100) {
//  if (i % 2 === 0);
// console.log(i);
//i++;
//}

const names = ["Lucky", "Pepper", "Feather", "Poke"];
for (let i = 0; i < names.length; i++) {
  console.log(names.length);
}
//loops exercise 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (i = 0; i <= 10; i++) {
  console.log(i);
}

let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

do {
  console.log(counter);
  counter++;
} while (counter < 10);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
  console.log(number);
}

// loops extended ch.
let word = "Lock";

if (outerWidth.length < 10) {
  for (let i = word.length; i <= 10; i++) {
    word = " " + word;
  }
}
console.log(word);
