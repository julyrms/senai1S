const prompt = require("prompt-sync")();
const x = 50;

while (true) {
  let y = Number(prompt("Descubra o número entre 1 e 100: "));
  if (y == x) {
    console.log("Parabéns, você acertou o número");
    break;
  }

  if (y > x) {
    console.log("Errou, tente denovo, o número é menor!");
  } else if (y < x) {
    console.log("Errou, tente denovo, o número é maior!");
  }
}
