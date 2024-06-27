const prompt = require("prompt-sync")();
let question = prompt("Digite um número maior que 0: ");
for (let i = 1; i <= question; i++) {
  console.log(i);
}
