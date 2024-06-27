const prompt = require("prompt-sync")();
let codigo = Number(prompt("Digite o código do produto: "));
switch (codigo) {
  case 101:
    console.log("Maça R$3,OO/Kg");
    break;
  case 102:
    console.log("Melancia R$5,OO/Kg");
    break;
  case 103:
    console.log("Morango R$20,00/Kg");
    break;
  default:
    console.log("Produto não registrado.");
}
