const prompt = require("prompt-sync")();
let contador = 0;
for (let i = 1; i <= 10; i++) {
  const ask = Number(prompt("Digite um número: "));
  contador = contador + ask;
}
console.log(contador / 10);
