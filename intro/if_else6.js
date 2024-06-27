const prompt = require("prompt-sync")();
const ano = Number(
  prompt("Digite um ano para saber se ele é bissexto ou comum: ")
);
if (ano % 4 == 0 && ano % 100 != 0) {
  console.log("É um ano bissexto!");
} else if (ano % 400 == 0) {
  console.log("É um ano bissexto!");
} else {
  console.log("É um ano comum!");
}
