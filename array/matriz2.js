const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

numbers.push([10, 20, 30]);
console.log("A lista com uma nova linha é: ", numbers);

numbers.unshift([3, 4, 5]);
console.log("A lista com uma nova linha inicial é: ", numbers);

numbers.pop(numbers[3]);
console.log("A lista sem a linha final é: ", numbers);

numbers.shift(numbers[0]);
console.log("A lista sem a linha inicial é:", numbers);

console.log("A matriz final é: ", numbers);
