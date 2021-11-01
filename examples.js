const prompt = require("prompt-sync")();

const person = {
  name: "Brit",
  age: 33,
  address: {
    street: "890 Lane",
    city: "Nowhere",
    state: "AL",
    zip: 48123,
  },
};

const vehicle = {
  color: "black",
  year: 2021,
  brand: {
    make: "Tesla",
    model: "X",
  },
  isElectric: true,
};
console.log(vehicle);
