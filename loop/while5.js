const prompt = require("prompt-sync")();
const user = "julyfoda";
const senha = 12345;

let i = 1;

while (true) {
  let u = prompt("Digite seu usúario: ");
  let s = Number(prompt("Digite sua senha: "));
  if (u == user && s == senha) {
    console.log("Login realizado com sucesso!");
  } else {
    console.log("Dados incorretos!");
  }
}
