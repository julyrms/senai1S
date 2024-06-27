const prompt = require("prompt-sync")();
let fator = 1;
const ask = prompt("Digite um valor e receba seu fatorial: ");
let cont = 1;
do {
  fator = fator * cont;
  cont++;
} while (cont <= ask);
console.log(fator);
