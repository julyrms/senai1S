const prompt = require("prompt-sync")();
let cont = 0;
let i = 1;
let ask = Number(prompt("Digite um número: "));
do {
  if (ask % i == 0) {
    cont++;
    i++;
  }
} while (i <= ask);

if (cont == 2) {
  console.log("É um número primo");
} else {
  console.log("Não é primo");
}
