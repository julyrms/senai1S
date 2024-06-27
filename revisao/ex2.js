const prompt = require("prompt-sync")();
let ask = prompt("Digite um valor: ");

if (ask > 5) {
  console.log("O valor é maior que 5.");
} else {
  console.log("O valor é menor que 5.");
}

let idade = prompt("Digite sua idade: ");
if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você é maior de idade!");
}
