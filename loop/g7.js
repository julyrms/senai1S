const prompt = require("prompt-sync")();
let ask = prompt("Digite um valor: ") * 1;

let contador = 0;

for (let i = 1; i <= ask; i++) {
  if (i == 1) {
    console.log(" ".repeat(ask), "*".repeat(i));
  }
  if (i > 1) {
    console.log(" ".repeat(ask - contador), "*".repeat(i + contador));
  }
  contador++;
}
