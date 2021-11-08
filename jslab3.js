//1
let submissions = [
  { name: "Jane", score: 95, date: "2020-1-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

//2
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
}
addSubmission(submissions, "John", 62, "2021-11-03");
addSubmission(submissions, "James", 15, "2021-11-03");

//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 1);

//4

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((sunmission) => {
    return submission.name === name;
  });
  aaray.slpice(index, 1);
}

// const deleteSubmissionByName = (array, name) => {
//   array.splice(name, 1);
// };
// deleteSubmissionByName(submissions, 1);

//5

//Matts solution
function editSubmission(array, index, score) {
  const submission = array[index];
  submission.score = score;
  submission.passed = score >= 60;
}

editSubmission(submissions, 2, 100);
console.log(submissions);

// const editSubmission = (array, index, score) => {
//   let passed;
//   if (score >= 60) {
//     passed = true;
//   } else {
//     passed = false;
//   }
// };

// Henrys solution
// function editSubmission(array, index, score){
//     array[index].score = score;
//     array[index].passed = score >=60;
// }

//6

//Matts solution
function findSumissionByName(array, name) {
  const found = array.find((submission) => submission.name === name);
  return found;
}
// My solution
// function findSumissionByName(array, name) {
//   const foundStudent = array.find((item) => {
//     return array.find(name);
//   });

//   if (foundStudent) {
//     return foundStudent;
//   } else {
//     return "No student found with name";
//   }
// }

// console.log(submissions);

//7
function findLowestScore(array) {
  let lowestScore = array[0];
  for (let submission of array) {
    if (submission.score < lowestScore.score) {
      lowestScore = submission;
    }
  }
  return lowestScore;
}

console.log("finding lowest score");
console.log(findLowestScore(submissions));

function findHighestScore(array) {
  let highestScore = array[0];
  for (let submission of array) {
    if (submission.score > highestScore.score) {
      highestScore = submission;
    }
  }
  return highestScore;
}

console.log("finding highest score");
console.log(findHighestScore(submissions));

//8
function findAverageScore(array) {
  let total = 0;
  for (let submission of array) {
    total += submission.score;
  }
  return total / array.length;
}

console.log("average score");
console.log(findAverageScore(submissions));

//9
function filterPassing(array) {
  return array.filter((submission) => submission.passed === true);
}

console.log("Passing Grades only....");
console.log(filterPassing(submissions));

//10
function filter90AndAbove(array) {
  return array.filter((submission) => submission.score >= 90);
}

console.log("Above 90 scores ");
console.log(filter90AndAbove(submissions));
