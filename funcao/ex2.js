const prompt = require("prompt-sync")();

function dados(nome) {
  return "Bem vindo (a), " + nome;
}

let ask = dados(prompt("Digite seu nome: "));
console.log(ask);
