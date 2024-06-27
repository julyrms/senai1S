const prompt = require("prompt-sync")();
const direcao = prompt(
  "Digite 1 se quer ir para a esquerda, digite 2 se quer ir para a direita, digite 3 se quer ir para a frente e digite 4 se quiser voltar para trás:"
);
if (direcao == 1) {
  console.log("Você está indo para a esquerda.");
} else if (direcao == 2) {
  console.log("Você está indo para a direita.");
} else if (direcao == 3) {
  console.log("Você está indo para frente");
} else {
  console.log("Você está voltando para trás.");
}
