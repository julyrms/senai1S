const prompt = require("prompt-sync")();
let menor = 0;
let maior = 0;
let i = 1;
do {
  let ask = Number(prompt("Digite os valores: "));
  if (i == 0) {
    menor = ask;
    maior = ask;
  } else {
    if (ask > maior) maior = ask;
  }

  if (ask < menor) {
    menor = ask;
  }
  i++;
} while (i <= 10);
console.log("O maior número é ", maior);
console.log("O menor número é ", menor);
