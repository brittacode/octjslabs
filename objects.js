/* const student = {
  name: "Britt",
  isEnrolled: true,
  graduation: 2022,
  class: ["Dec 2021", "Jan 2022"],

  hasGraduated() {
    const currentYear = new Date().getFullYear();

    return this.graduation < currentYear;
  },
  getFirstClass() {
    return this.class[0];
  },
};

console.log(this.graduation);
 */

const letters = ["B", "D"];

letters.unshift("A");

letters.splice(2, 3, "C", "D");

letters.push("E");

console.log(letters);

const names = ["Shawn", "Gus", "Henry", "Carlton", "Juliet"];

names.shift();
names.pop();
names.splice(1, 1);

console.log(names);

const students = [
  {
    name: "Britt",
    average: 98,
  },

  {
    name: "Ruffie",
    average: 55,
  },

  {
    name: "Pepper",
    average: 68,
  },

  {
    name: "Hope",
    average: 85,
  },
];

console.log(students.filter((students) => students.average > 70));
