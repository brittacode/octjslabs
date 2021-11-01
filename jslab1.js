let fullName = "Mitch Cuckovich";
let pineapplePizza = true;
let age = "25";
let birthday = "Jaunaury 24th";
let lifeEvents = [
  "I was born in Troy",
  "I went to Hope College",
  "I went Junior Olympics when I was 10 years old I placed 14th in the nation in the 800 meter event",
  "I'm a graduate of Grand Circus bootcamp.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on my pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on my pizza. I am currently ${age} years old and my birthday is on ${birthday} `
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
if (true) {
  let randomNum = Math.floor(Math.random() * 11);
  if (randomNum !== 5) {
    counter++;
    console.log(`${randomNum} !==5!`);
  } else {
    counter++;
  }
  console.log(
    `5 === 5 It took ${counter} iterations to randomly generate the number 5`
  );
}
