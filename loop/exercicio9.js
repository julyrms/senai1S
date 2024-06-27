const prompt = require("prompt-sync")();
let menor;
let maior;

for (let i = 1; i <= 5; i++) {
  let ask = prompt("Digite um número: ");
  if (i == 1) {
    menor = ask;
    maior = ask;
  } else {
    if (ask > maior) maior = ask;
  }
  if (ask < menor) {
    menor = ask;
  }
}
console.log("O maior número é: ", maior);
console.log("O menor número é: ", menor);
