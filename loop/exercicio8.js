const prompt = require("prompt-sync")();
let question = prompt("Digite um número: ");
let contar = 0;
for (let i = 1; i <= question; i++) {
  if (question % i == 0) {
    contar++;
  }
}
if (contar == 2) {
  console.log("O número é primo");
} else {
  console.log("O número não é primo");
}
