const tempCelsius = 0;
const targetUnit = "K";

switch (targetUnit) {
  case "K":
    const kelvin = tempCelsius + 273.15;
    console.log(kelvin);
    break;
  case "F":
    const farenheight = tempCelsius * (9 / 5) + 32;
    console.log(farenheight);
    break;
  case "C":
    console.log(tempCelsius);
    break;
  default:
    console.log("Please enter a valid unit");
}

if (targetUnit === "K") {
  const kelvin = tempCelsius + 273.15;
  console.log(kelvin);
} else if (targetUnit === "F") {
  const farenheight = tempCelsius * (9 / 5) + 32;
  console.log(farenheight);
} else if (targetUnit === "C") {
  console.log(tempCelsius);
} else {
  console.log("Please enter a valid unit");
}
