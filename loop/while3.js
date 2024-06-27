const prompt = require("prompt-sync")();
let menor;
let maior;
let i = 0;
while (i < 10) {
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
}
console.log("O maior número é ", maior);
console.log("O menor número é ", menor);
