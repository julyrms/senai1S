let number = 1;
let i = 1;
do {
  if (number % 2 !== 0) {
    console.log(number);
    i++;
    number = number + 2;
  }
} while (i <= 100);
