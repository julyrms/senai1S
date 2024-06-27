const arr = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

const x = arr[arr.length - 1]; //usando variavel
const last = arr[arr.length - 1][arr[arr.length - 1].length]; //ultimo elemento com 1 comando
const facil = arr.at(-1).at(-1); // usando at

console.log("O primeiro elemento é: ", arr[1][1]);
console.log("O segundo elemento é: ", arr[2][3]);
console.log("A terceira linha é: ", arr[3]);
console.log("O último elemento é: ", x[x.length - 1]);
