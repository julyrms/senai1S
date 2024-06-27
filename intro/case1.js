const prompt = require("prompt-sync")();
let caminhao = Number(prompt("Digite o peso de seu caminhão: ").trim());
switch (true) {
  case caminhao >= 1000 && caminhao <= 3999:
    console.log("Caminhão de pequeno porte.");
    break;
  case caminhao >= 4000 && caminhao <= 6000:
    console.log("Caminhão de médio porte.");
    break;
  case caminhao > 6000:
    console.log("Caminhão de grande porte.");
    break;
  default:
    console.log("Não é um caminhão.");
}
