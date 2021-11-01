const prompt = require("prompt-sync")();
const name1 = prompt("What is name number one?: ");
const name2 = prompt("What is name number two?: ");
const name3 = prompt("What is name number three?: ");
const length1 = name1.length;
const length2 = name2.length;
const length3 = name3.length;
if (length1 > length2 && length1 > length3) {
  console.log(`${name1} has the longest name.`);
} else if (length2 > length1 && length2 > length3) {
  console.log(`${name2} has the longest name.`);
} else if (length3 > length1 && length3 > length2) {
  console.log(`${name3} has the longest name.`);
} else if (length1 === length2 && length1 > length3) {
  console.log(`${name1} and ${name2} tie for longest name.`);
} else if (length2 === length3 && length2 > length1) {
  console.log(`${name2} and ${name3} tie for longest name.`);
} else if (length1 === length3 && length1 > length2) {
  console.log(`${name1} and ${name3} tie for longest name.`);
} else if (length1 === length2 && length1 === length3) {
  console.log(
    `All three names ${name1}, ${name2}, and ${name3} are the same length.`
  );
}

//const prompt = require("prompt-sync")();

//const name1 = "Barry Havelo";
//const name2 = "Mike Golden";
//const name3 = "Duke Leather";

//}

//if (name1.length() > name2.length()) console.log();
//else if (name.length() > name.length()) console.log();

//if (name.length > name.length) {
//console.log(`${name}`);
//} else {
// console.log("Name is ");
//}

//console.log(name.length);
