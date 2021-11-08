//exercise-1
function getAreaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(getAreaOfCircle(9));

function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircumferenceOfCircle(4));

function getAreaOfSquare(side) {
  return side * side;
}
console.log(getAreaOfSquare(8));

function getAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}
console.log(getAreaOfTriangle(8, 3));

//exercise-2

let position = 0;
let direction = "right";

function moveForward(distance) {
  if (direction === "right") {
    position = position + distance;
  } else {
    position = position - distance;
  }
}

function moveBackward(distance) {
  if (direction === "right") {
    position = position - distance;
  } else {
    position = position + distance;
  }
}

function turnAround() {
  if (direction === "right") {
    direction = "left";
  } else if (direction === "left") {
    direction = "right";
  }
}

function printLocation() {
  console.log(position);
}
moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
