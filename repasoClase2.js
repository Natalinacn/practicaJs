// ========= Repaso Clase 3 =========
const countries = ["Finland", "Sweden", "Denmark", "Norway"];

// Construccion
const mixed = ["Str", 89, [3, 5], false, null];
const arr = new Array(1, 2, 3, 4, 5);

// Acceso (por indice)
const first = countries[0];
const second = countries[1];
const lastIndex = countries.length - 1;
const last = countries[lastIndex];

// ITerar un array
// a. for loop
// index          0  1   2   3
const numbers = [44, 2, 31, 17]; // Length: 4

for (let i = 0; i < numbers.length; i++) {
  let country = numbers[i];
  console.log(country);
}

// // b. for of loop
for (const number of numbers) {
  console.log(number);
}

// Adding items to end of an array
countries.push("Iceland");

// Adding items to the beginning of an array
countries.unshift("Iceland");

// Removing items from end of an array
const removed = countries.pop();

// Removing items from the beginning of an array
const shifted = countries.shift();

// Finding an index of an item in the array
const pos = countries.indexOf("Denmark");

